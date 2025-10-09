// React Native Axios – To Make HTTP API call in React Native
// https://aboutreact.com/react-native-axios/

import {useState, useEffect} from 'react';
import { Alert } from 'react-native';
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

import { Feather } from '@expo/vector-icons';

import {AntDesign} from '@expo/vector-icons';

const ProductList = ({navigation}) => {

  const [listItems, setListItems] = useState([]);

    const getDataUsingSimpleGetCall = () => {
    axios
        .get('https://68e0797a93207c4b4794886f.mockapi.io/api/v1/products/products')
        .then(function (response) {
            const filteredData = response.data.filter(item => item.isDeleted === false);
            setListItems(filteredData);
        })
        .catch(function (error) {
        // handle error
        Alert.alert('Error', error.message, [
          { text: 'OK' }
        ]);
        });
    };

    const deleteProductCall = (productId) => {
      axios
          .patch(`https://68e0797a93207c4b4794886f.mockapi.io/api/v1/products/products/${productId}`, { isDeleted: true })
          .then(function (response) {
              Alert.alert('Success', 'Product deleted successfully', [
                { text: 'OK', onPress: () => getDataUsingSimpleGetCall() }
              ]);
          })
          .catch(function (error) {
          // handle error
          Alert.alert('Error', error.message, [
            { text: 'OK' }
          ]);
          }); 
  };

    const getAllBooks = useEffect(() => {
        getDataUsingSimpleGetCall();
    }, []);

    const ItemView = ({item}) => {
      return (
        // FlatList Item
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetails', {productId: item.id})}
          style={styles.container_vertical}
        >
          <Image 
            source={{uri: item.imgUrl}}  
            style={{width: 100, height: 100}} 
          />

          <View style={{...styles.item, flex: 1}}>
            <Text
            style={styles.item}
            >
            {`Name: ${item.value}`}
          </Text>

          <Text
            style={styles.item}
            >
            {`Author: ${item.author}`}
          </Text>

          <Text
            style={styles.item}
            >
            {`Price: ${item.price}`}
          </Text>

          <Text
            style={styles.item}
            >
            {`Description: ${item.desc}`}
          </Text>

          </View>

          <Feather name="edit" color="#1717c2ff" size={24} 
            onPress={()=> {
              navigation.navigate('ProductEdit', {productId: item.id});  
            }}
          />

          <AntDesign name="delete" color="#a21c1cff" size={24} 
            onPress={() => {
              Alert.alert(
                'Delete Product',
                'Are you sure you want to delete this product?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'OK', 
                    style: 'destructive',
                    onPress: () => deleteProductCall(item.id)
                  },
                ]
              );
            }}
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
      Alert.alert('Item Info', 'Id: ' + item.id + ' Value: ' + item.title, [
        { text: 'OK' }
      ]);
    };
  
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <FlatList
            data={listItems}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
          <TouchableOpacity
            style={styles.fab}
            onPress={() => navigation.navigate('ProductCreate')}
          >
            <AntDesign name="plus" size={32} color="#fff" />
          </TouchableOpacity>
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
  container_vertical: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    // marginTop: 30,
    columnGap: 10,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 32,
    backgroundColor: '#6c5ce7',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default ProductList;