import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import ProductCategory from './ProductCategory';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductCategory">
        <Stack.Screen 
          name="ProductCategory"
          component={ProductCategory}
          options={{
            tabBarLabel: 'ProductCategory',
            title: 'ProductCategory',
          }}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{
            tabBarLabel: 'ProductList',
            title: 'ProductList',
          }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            tabBarLabel: 'ProductDetails',
            title: 'ProductDetails',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
