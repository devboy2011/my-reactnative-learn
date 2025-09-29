import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PageSeting from './pages/PageSetting';
import PageStack from './pages/PageStack';
import AuthStack from './baitap3/PageStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStack"
          component={PageSeting}
          options={{
            tabBarLabel: 'Home',
            title: 'Home',
          }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={PageStack}
          options={{
            tabBarLabel: 'Settings',
            title: 'Setting',
          }}
        />
        <Tab.Screen
          name="AuthStack"
          component={AuthStack}
          options={{
            tabBarLabel: 'Auth Forms',
            title: 'Authentication',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
