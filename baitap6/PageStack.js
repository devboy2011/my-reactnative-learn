import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="ProductList">
        <Tab.Screen 
          name="ProductList"
          component={ProductList}
          options={{
            tabBarLabel: 'ProductList',
            title: 'ProductList',
          }}
        />
        <Tab.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            tabBarLabel: 'ProductDetails',
            title: 'ProductDetails',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            title: 'Profile',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
