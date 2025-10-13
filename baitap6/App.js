import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import UserStack from './UserStack';
import ProductCreate from './ProductCreate';
import ProductDetails from './ProductDetails';
import ProductEdit from './ProductEdit';

import { Provider } from 'react-redux';
import { store } from './redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              tabBarLabel: 'Login',
              title: 'Login',
            }}
          />
          <Stack.Screen
            name="MainFeature"
            component={UserStack}
            options={{
              tabBarLabel: 'MainFeature',
              title: 'MainFeature',
            }}
          />
          <Stack.Screen
            name="ProductCreate"
            component={ProductCreate}
            options={{
              tabBarLabel: 'Create Product',
              title: 'Create Product',
            }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{
              tabBarLabel: 'Product Details',
              title: 'Product Details',
            }}
          />
          <Stack.Screen
            name="ProductEdit"
            component={ProductEdit}
            options={{
              tabBarLabel: 'Edit Product',
              title: 'Edit Product',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}
