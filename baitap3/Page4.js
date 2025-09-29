import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

const Page4 = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Create new account</Text>

      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <View style={styles.avatarEditIcon}>
            <Text style={styles.editIconText}>✎</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>First Name</Text>
          <TextInput
            style={styles.textInput}
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Last Name</Text>
          <TextInput
            style={styles.textInput}
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput
            style={styles.textInput}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.phoneContainer}>
          <View style={styles.countryCodeContainer}>
            <Text style={styles.flagText}>🇺🇸</Text>
            <Text style={styles.countryCodeText}>+1</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.sendCodeButton}>
          <Text style={styles.sendCodeButtonText}>Send code</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>OR</Text>

        <TouchableOpacity 
          style={styles.emailButton}
          onPress={() => navigation.navigate('Page2')}
        >
          <Text style={styles.emailButtonText}>Sign up with E-mail</Text>
        </TouchableOpacity>

        <Text style={styles.agreementText}>
          By creating an account you agree with our{'\n'}
          <Text style={styles.linkText}>Terms of Service</Text> and <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>
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
    marginBottom: 30,
  },
  formContainer: {
    flex: 1,
  },
  avatarContainer: {
    alignSelf: 'center',
    marginBottom: 30,
    position: 'relative',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 30,
    color: '#888',
  },
  avatarEditIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#6c5ce7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIconText: {
    color: '#fff',
    fontSize: 12,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    color: '#888',
    marginBottom: 8,
    fontSize: 14,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingVertical: 10,
    color: '#fff',
    fontSize: 16,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    marginBottom: 30,
    paddingVertical: 10,
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagText: {
    fontSize: 20,
    marginRight: 5,
  },
  countryCodeText: {
    color: '#fff',
    fontSize: 16,
  },
  sendCodeButton: {
    backgroundColor: '#6c5ce7',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
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
  emailButton: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  emailButtonText: {
    color: '#6c5ce7',
    fontSize: 14,
  },
  agreementText: {
    color: '#888',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 16,
  },
  linkText: {
    color: '#6c5ce7',
  },
});

export default Page4;
