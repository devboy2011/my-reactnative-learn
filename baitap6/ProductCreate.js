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

const ProductCreate = ({route, navigation}) => {
  const [product, setProduct] = useState({});

  const [productName, setProductName] = useState(''); 
  const [productAuthor, setProductAuthor] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productDesc, setProductDesc] = useState('');

  const updateProductDetails = () => {
    const updatedProduct = {
      name: productName,
      author: productAuthor,
      price: productPrice,
      desc: productDesc
    };

    axios
      .post(`https://68e0797a93207c4b4794886f.mockapi.io/api/v1/products/products`, updatedProduct)
      .then(function (response) {
        alert('Thêm sản phẩm thành công');
        navigation.navigate('ProductList');
      })
      .catch(function (error) {
        alert(error.message);
      });
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>

        <View style={{...styles.item, flex: 1}}>

          <Text style={styles.item}>{`Name:`}</Text>
          <TextInput
            style={styles.input}
            placeholder={'Nhập tên sản phẩm'}
            onChangeText={setProductName}
            required
          />

          <Text style={styles.item}>{`Author`}</Text>
          <TextInput
            style={styles.input}
            placeholder={'Nhập tên tác giả'}
            onChangeText={setProductAuthor}
            charset = 'utf-8'
            required
          />

          <Text style={styles.item}>{`Price:`}</Text>
          <TextInput
            style={styles.input}
            placeholder={'Nhập giá sản phẩm'}
            onChangeText={setProductPrice}
            keyboardType="numeric"// only allow numeric input
            required
          />

          <Text style={styles.item}>{`Description:`}</Text>
          <TextInput
            style={{...styles.input, height: 'auto', minHeight: 60}}
            placeholder={'Nhập mô tả sản phẩm'}
            onChangeText={setProductDesc}
            multiline
            charset = 'utf-8'
          />
        </View>

        <Button
          title="Thêm sản phẩm"
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

export default ProductCreate;