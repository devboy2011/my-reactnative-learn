
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Child1 from './components/Child1';
import HomeScreen from './components/HomeScreen';

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Child1 />
                <HomeScreen />
            </View>
        </Provider>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});