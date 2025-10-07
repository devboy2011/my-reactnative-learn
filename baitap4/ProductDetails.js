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

const flowerList = [
  {
      id: '1', 
      categoryId: '1',
      value: 'Hoa hồng đỏ', 
      imageUrl: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?_gl=1*s6rq7g*_ga*ODA1NTg2NjE1LjE3NTgyMDEwNjM.*_ga_8JE65Q40S6*czE3NTk2NjMyODIkbzMkZzEkdDE3NTk2NjM2NjgkajI3JGwwJGgw',
      price: 120000,
  },
  {
      id: '2', 
      categoryId: '1',
      value: 'Hoa hồng trắng', 
      imageUrl: 'https://images.pexels.com/photos/10866516/pexels-photo-10866516.jpeg?_gl=1*1fmorvx*_ga*ODA1NTg2NjE1LjE3NTgyMDEwNjM.*_ga_8JE65Q40S6*czE3NTk2NjMyODIkbzMkZzEkdDE3NTk2NjYwNTMkajU5JGwwJGgw',
      price: 130000,
  },
  {
      id: '3', 
      categoryId: '1',
      value: 'Hoa hồng xanh', 
      imageUrl: 'https://images.pexels.com/photos/7755139/pexels-photo-7755139.jpeg?_gl=1*nd62tg*_ga*ODA1NTg2NjE1LjE3NTgyMDEwNjM.*_ga_8JE65Q40S6*czE3NTk2NjMyODIkbzMkZzEkdDE3NTk2NjYxMTMkajU5JGwwJGgw',
      price: 130000,
  },
  {
      id: '4', 
      categoryId: '2',
      value: 'Combo hoa hồng', 
      imageUrl: 'https://images.pexels.com/photos/20755030/pexels-photo-20755030.jpeg?_gl=1*1m8pys1*_ga*ODA1NTg2NjE1LjE3NTgyMDEwNjM.*_ga_8JE65Q40S6*czE3NTk2NjMyODIkbzMkZzEkdDE3NTk2NjYxNjEkajExJGwwJGgw',
      price: 130000,
  },
  {
      id: '5', 
      categoryId: '3',
      value: 'Combo vườn hoa tình yêu', 
      imageUrl: 'https://images.pexels.com/photos/673857/pexels-photo-673857.jpeg?_gl=1*8hcfnn*_ga*ODA1NTg2NjE1LjE3NTgyMDEwNjM.*_ga_8JE65Q40S6*czE3NTk2NjMyODIkbzMkZzEkdDE3NTk2NjYyNDYkajI1JGwwJGgw',
      price: 130000,
  },
]

const ProductDetails = ({route}) => {
  const [flower, setFlower] = useState({});

  const {productId} = route.params;

  useEffect(()=> {
    const filteredItems = flowerList.filter(item => item.id === productId);
    setFlower(filteredItems[0]);
  },[productId]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text
          style={styles.item}
          >
          {`Tên: ${flower.value}`}
        </Text>

        <Text
          style={styles.item}
          >
          {`Giá: ${flower.price}`}
        </Text>

        <Image 
            source={{uri: flower.imageUrl}}  
            style={{width: 100, height: 100}} 
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

export default ProductDetails;