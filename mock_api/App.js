import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import ProductEdit from './ProductEdit';
import ProductCreate from './ProductCreate';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen 
          name="ProductList"
          component={ProductList}
          options={{
            tabBarLabel: 'ProductList',
            title: 'ProductList',
          }}
        />
        <Stack.Screen
          name="ProductCreate"
          component={ProductCreate}
          options={{
            tabBarLabel: 'ProductCreate',
            title: 'ProductCreate',
          }}
        />
        <Stack.Screen
          name="ProductEdit"
          component={ProductEdit}
          options={{
            tabBarLabel: 'ProductEdit',
            title: 'ProductEdit',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
