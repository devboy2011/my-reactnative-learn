import { View, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native';

const Page1 = ({ navigation }) => {
  return (
    <View>
      <Text>Page1</Text>
      <Button
        title="Go to Second Sreen"
        onPress={() =>
          navigation.replace('SecondPage')
        }
      />
    </View>
  );
};

export default Page1;
