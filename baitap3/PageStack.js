import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

const Stack = createNativeStackNavigator();

const PageStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Page1"
      screenOptions={{
        headerShown: false, // Ẩn header để giữ design như trong hình
      }}
    >
      <Stack.Screen
        name="Page1"
        component={Page1}
      />
      <Stack.Screen
        name="Page2"
        component={Page2}
      />
      <Stack.Screen
        name="Page3"
        component={Page3}
      />
      <Stack.Screen
        name="Page4"
        component={Page4}
      />
    </Stack.Navigator>
  );
};

export default PageStack;