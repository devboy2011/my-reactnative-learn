import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Page3 = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Sign In</Text>

      <View style={styles.formContainer}>
        <View style={styles.phoneInputContainer}>
          <View style={styles.countryCodeContainer}>
            <Text style={styles.flagText}>🇺🇸</Text>
            <Text style={styles.countryCodeText}>+1</Text>
          </View>
          <TextInput
            style={styles.phoneInput}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            placeholder=""
            placeholderTextColor="#666"
          />
        </View>

        <TouchableOpacity style={styles.sendCodeButton}>
          <Text style={styles.sendCodeButtonText}>Send code</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>OR</Text>

        <TouchableOpacity style={styles.facebookButton}>
          <Text style={styles.facebookButtonText}>Login With Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleButtonText}>G</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.appleButton}>
          <Text style={styles.appleButtonText}>🍎 Sign in with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.emailButton}
          onPress={() => navigation.navigate('Page2')}
        >
          <Text style={styles.emailButtonText}>Sign in with E-mail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 20,
  },
  backButton: {
    marginTop: 40,
    marginBottom: 20,
  },
  backButtonText: {
    color: '#888',
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6c5ce7',
    marginBottom: 40,
  },
  formContainer: {
    flex: 1,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    marginBottom: 40,
    paddingVertical: 10,
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
    borderRightWidth: 1,
    borderRightColor: '#333',
    marginRight: 15,
  },
  flagText: {
    fontSize: 20,
    marginRight: 5,
  },
  countryCodeText: {
    color: '#fff',
    fontSize: 16,
  },
  phoneInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  sendCodeButton: {
    backgroundColor: '#6c5ce7',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 30,
  },
  sendCodeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  facebookButton: {
    backgroundColor: '#4267B2',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  facebookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  googleButton: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 15,
  },
  googleButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  appleButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  appleButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  emailButton: {
    alignSelf: 'center',
  },
  emailButtonText: {
    color: '#6c5ce7',
    fontSize: 14,
  },
});

export default Page3;
