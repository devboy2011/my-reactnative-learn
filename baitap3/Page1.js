import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Page1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Logo placeholder - in real app, use an image */}
        <View style={styles.logoIcon}>
          <Text style={styles.logoText}>🚀</Text>
        </View>
        <Text style={styles.appName}>Instamobile</Text>
        <Text style={styles.subtitle}>
          Use this codebase to start a new Firebase{'\n'}
          mobile app in minutes.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => navigation.navigate('Page2')}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.signUpButton}
          onPress={() => navigation.navigate('Page4')}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
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
    justifyContent: 'space-between',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6c5ce7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 40,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6c5ce7',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    lineHeight: 22,
  },
  buttonContainer: {
    paddingBottom: 50,
  },
  loginButton: {
    backgroundColor: '#6c5ce7',
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signUpButton: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#444',
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#888',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Page1;
