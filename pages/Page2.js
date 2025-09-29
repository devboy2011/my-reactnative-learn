import { View, Text, Button } from 'react-native';
import React from 'react';

const Page2 = ({ navigation }) => {
  return (
    <View>
      <Text>Page2</Text>
      <Button
        title="Go to home"
        onPress={() =>
          navigation.replace('FirstPage')
        }
      />
    </View>
  );
};

export default Page2;
