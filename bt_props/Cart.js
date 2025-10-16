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

const Cart = ({route, navigation}) => {

  const {fullname, address } = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Button
          title="Next"
          onPress={() => navigation.navigate("Profile", { fullname: fullname, address: address })}
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

export default Cart;