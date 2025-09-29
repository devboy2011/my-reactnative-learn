import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from './Page1';
import Page2 from './Page2';

const Stack = createNativeStackNavigator();

const PageStack = () => {
	return (
		<Stack.Navigator initialRouteName="FirstPage">
			<Stack.Screen
				name="FirstPage"
				component={Page1}
			/>
			<Stack.Screen
				name="SecondPage"
				component={Page2}
			/>
		</Stack.Navigator>
	);
};

export default PageStack;
