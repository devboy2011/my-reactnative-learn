//import React in our code
import {useState, useEffect} from 'react';
import { Image, TouchableOpacity} from 'react-native'

//import all the components we are going to use
import {
    FlatList,
    View,
    Text,
    SafeAreaView,
    StyleSheet
} from 'react-native';

const flowerCategory = [
  {id: '1', value: 'Hoa hồng', imageUrl: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?_gl=1*s6rq7g*_ga*ODA1NTg2NjE1LjE3NTgyMDEwNjM.*_ga_8JE65Q40S6*czE3NTk2NjMyODIkbzMkZzEkdDE3NTk2NjM2NjgkajI3JGwwJGgw'},
  {id: '2', value: 'Hoa tình yêu', imageUrl: 'https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg?_gl=1*3m6d6r*_ga*ODA1NTg2NjE1LjE3NTgyMDEwNjM.*_ga_8JE65Q40S6*czE3NTk2NjMyODIkbzMkZzEkdDE3NTk2NjM3MDIkajYwJGwwJGgw'},
  {id: '3', value: 'Hoa combo', imageUrl: 'https://images.pexels.com/photos/931179/pexels-photo-931179.jpeg?_gl=1*ptgipq*_ga*ODA1NTg2NjE1LjE3NTgyMDEwNjM.*_ga_8JE65Q40S6*czE3NTk2NjMyODIkbzMkZzEkdDE3NTk2NjM3NDYkajE2JGwwJGgw'},
]

const ProductCategory = ({navigation, route}) => {
  const [listItems, setListItems] = useState(flowerCategory);

  useEffect(()=> {
    setListItems(flowerCategory);
  },[]);

  const ItemView = ({item}) => {
    return (
      // FlatList Item
      <TouchableOpacity
        onPress={() => getItem(item)}
      >
        <Text
          style={styles.item}
          >
          {`Tên: ${item.value}`}
        </Text>

        <Image 
            source={{uri: item.imageUrl}}  
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
    navigation.navigate(
        'ProductList', 
        {categoryId: item.id}
    );
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
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default ProductCategory;