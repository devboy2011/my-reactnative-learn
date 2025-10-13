//import React in our code
import {useState, useEffect} from 'react';
import { Image, TouchableOpacity} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUserName, selectUserAddress} from './redux/userSlice';

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

const Profile = ({navigation}) => {

  const dispatch = useDispatch();

  const username = useSelector(selectUserName);
  const address = useSelector(selectUserAddress);

  useEffect(() => {
    if (!username) {
      navigation.navigate('Login');
    }
  }, [username]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{...styles.item, flex: 1}}>
          <Text
            style={styles.item}
            >
            {`Name: ${username}`}
          </Text>

          <Text
            style={styles.item}
            >
            {`Address: ${address}`}
          </Text>
        </View>

        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Logout"
          onPress={() => {
            dispatch(logout());
            navigation.navigate('Login');
          }}
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

export default Profile;