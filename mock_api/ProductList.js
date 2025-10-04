// React Native Axios – To Make HTTP API call in React Native
// https://aboutreact.com/react-native-axios/

import {useState, useEffect} from 'react';
import {
    FlatList,
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image, TouchableOpacity,
} from 'react-native';
//import all the components we are going to use.
import axios from 'axios';

const App = () => {

  const [listItems, setListItems] = useState([]);

    const getDataUsingSimpleGetCall = () => {
    axios
        .get('https://68e0797a93207c4b4794886f.mockapi.io/api/v1/products/books')
        .then(function (response) {
            setListItems(response.data);
        })
        .catch(function (error) {
        // handle error
        alert(error.message);
        });
    };

    const getAllBooks = useEffect(() => {
        getDataUsingSimpleGetCall();
    }, []);

    const ItemView = ({item}) => {
      return (
        // FlatList Item
        <TouchableOpacity
          onPress={() => getItem(item)}
        >
          <Text
            style={styles.item}
            >
            {`Tên: ${item.name}`}
          </Text>
  
          <Text
            style={styles.item}
            >
            {`Giá thành: ${item.price}`}
          </Text>
  
          <Image 
              source={{uri: item.avatar}}  
              style={{width: 100, height: 100}} 
          />
        </TouchableOpacity>
      );
    };
  
    const ItemSeparatorView = () => {
      return (
        // FlatList Item Separator
        <View
            style={{
                height: 0.5,
                width: '100%',
                backgroundColor: '#C8C8C8'
            }}
        />
      );
    };
  
    const getItem = (item) => {
      //Function for click on an item
      alert('Id: ' + item.id + ' Value: ' + item.title);
    };
  
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <FlatList
            data={listItems}
            //data defined in constructor
            ItemSeparatorComponent={ItemSeparatorView}
            //Item Separator View
            renderItem={ItemView}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});

export default App;