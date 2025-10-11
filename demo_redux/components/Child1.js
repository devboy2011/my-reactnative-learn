import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

const Child1 = ()=> {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return(
        <View>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={() => dispatch(increment())} />
            <Button title="Decrement" onPress={() => dispatch(decrement())} />
        </View>
    );
}

export default Child1;

const style = StyleSheet.create({});