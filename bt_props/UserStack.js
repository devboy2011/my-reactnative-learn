import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import ProductEdit from './ProductEdit';
import ProductCreate from './ProductCreate';
import Login from './Login';
import Profile from './Profile';
import Cart from './Cart';

import { Provider } from 'react-redux';
import { store } from './redux/store';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function UserStack() {
  return (
    <Tab.Navigator initialRouteName="Cart">
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          title: 'Profile',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          title: 'Cart',
        }}
      />
    </Tab.Navigator>
  );
}