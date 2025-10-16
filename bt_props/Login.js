//import React in our code
import {useState, useEffect} from 'react';
import { Image, TouchableOpacity} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { login, selectUserName} from './redux/userSlice';

//import all the components we are going to use
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Button,
    TextInput
} from 'react-native';
import axios from 'axios';

const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();

  // Lấy dữ liệu người dùng từ Redux store
  const username = useSelector(selectUserName);

  const handleLogin = () => {

    if (!email || !password) {
      alert('Vui lòng nhập đầy đủ email và mật khẩu.');
      return;
    }

    const currentUser = {
      email: email,
      password: password
    }

    axios
      .get(`https://68e0797a93207c4b4794886f.mockapi.io/api/v1/products/user/1000`)
      .then(function (response) {
        const userData = { fullname: 'John', address: "Vietnam" };
        navigation.navigate('Cart', { fullname: userData.fullname, address: userData.address });
      })
      .catch(function (error) {
        alert("Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.");
      });
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>

        <View style={{...styles.item, flex: 1}}>

          <Text style={styles.item}>{`Email:`}</Text>
          <TextInput
            style={styles.input}
            placeholder={'Email'}
            onChangeText={setEmail}
            required
          />

          <Text style={styles.item}>{`Password`}</Text>
          <TextInput
            style={styles.input}
            placeholder={'Password'}
            onChangeText={setPassword}
            secureTextEntry={true}
            charset = 'utf-8'
            required
          />
        </View>

        <Button
          title="Đăng nhập"
          onPress={() => handleLogin()}
          style = {{...styles.input, backgroundColor: 'blue', color: 'white'}}
        />
        <Button
          title="Đăng ký"
          style={styles.input}
          >

        </Button>
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

export default Login;