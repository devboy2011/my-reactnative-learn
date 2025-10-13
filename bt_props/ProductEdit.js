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
    Button,
    TextInput
} from 'react-native';
import axios from 'axios';

const ProductEdit = ({route, navigation}) => {
  const [product, setProduct] = useState({});

  const {productId} = route.params;

  const [productName, setProductName] = useState(''); 
  const [productAuthor, setProductAuthor] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productDesc, setProductDesc] = useState('');

  useEffect(()=> {
    getProductDetails();
  },[productId]);

  const getProductDetails = () => {
    axios
        .get(`https://68e0797a93207c4b4794886f.mockapi.io/api/v1/products/products/${productId}`)
        
        .then(function (response) {
            setProduct(response.data);
            setProductName(response.data.name);
            setProductAuthor(response.data.author);
            setProductPrice(response.data.price);
            setProductDesc(response.data.desc);
        })
        .catch(function (error) {
        // handle error
        alert(error.message);
        });
    };

    const updateProductDetails = () => {
      const updatedProduct = {
        name: productName,
        author: productAuthor,
        price: productPrice,
        desc: productDesc
      };

      axios
        .put(`https://68e0797a93207c4b4794886f.mockapi.io/api/v1/products/products/${productId}`, updatedProduct)
        .then(function (response) {
          alert('Product updated successfully');
          navigation.navigate('ProductList');
        })
        .catch(function (error) {
          alert(error.message);
        });
    }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image 
          source={{uri: product.imgUrl}}  
          style={{width: 100, height: 100}} 
        />

        <View style={{...styles.item, flex: 1}}>

          <Text style={styles.item}>{`Name:`}</Text>
          <TextInput
            style={styles.input}
            value={productName}
            onChangeText={setProductName}
          />

          <Text style={styles.item}>{`Author`}</Text>
          <TextInput
            style={styles.input}
            value={productAuthor}
            onChangeText={setProductAuthor}
          />

          <Text style={styles.item}>{`Price:`}</Text>
          <TextInput
            style={styles.input}
            value={String(productPrice)}
            onChangeText={setProductPrice}
            keyboardType="numeric"// only allow numeric input
          />

          <Text style={styles.item}>{`Description:`}</Text>
          <TextInput
            style={{...styles.input, height: 'auto', minHeight: 60}}
            value={productDesc}
            onChangeText={setProductDesc}
            multiline
          />
        </View>

        <Button
          title="Update Product"
          onPress={() => updateProductDetails()}
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
    flexGap: 10,
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
  input:{
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    fontSize: 18,
  }
});

export default ProductEdit;