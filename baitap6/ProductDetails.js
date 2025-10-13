//import React in our code
import {useState, useEffect} from 'react';
import { Image, TouchableOpacity} from 'react-native'

//import all the components we are going to use
import {
    FlatList,
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Button
} from 'react-native';
import axios from 'axios';

const ProductDetails = ({route, navigation}) => {
  const [product, setProduct] = useState({});

  const {productId} = route.params;

  useEffect(()=> {
    getProductDetails();
  },[productId]);

  const getProductDetails = () => {
    axios
        .get(`https://68e0797a93207c4b4794886f.mockapi.io/api/v1/products/products/${productId}`)
        .then(function (response) {
            setProduct(response.data);
        })
        .catch(function (error) {
        // handle error
        alert(error.message);
        });
    };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image 
          source={{uri: product.imgUrl}}  
          style={{width: 200, height: 200, alignSelf: 'center'}} 
        />

        <View style={{...styles.item, flex: 1}}>
          <Text
            style={styles.item}
            >
            {`Name: ${product.value}`}
          </Text>

          <Text
            style={styles.item}
            >
            {`Author: ${product.author}`}
          </Text>

          <Text
            style={styles.item}
            >
            {`Price: ${product.price}`}
          </Text>

          <Text
            style={{...styles.item, height: 'auto', minHeight: 60}}
            >
            {`Description: ${product.desc}`}
          </Text>
        </View>

        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  container_vertical: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
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