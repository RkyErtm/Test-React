import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface CounterProps {
  start: number;
  step: number;
}

export const Counter = ({start, step}: CounterProps) => {
  const [count, setCount] = useState<number>(start);
  const increment = () => setCount(count + step);
  const decreament = () => setCount(count - step);
  return (
    <View
      style={{
        // flex: 1,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'lightgray',
        width: 200,
        height: 200,
        margin: 10,
      }}>
      <Text>{count}</Text>
      <Button title="Artır" onPress={increment}></Button>
      <Button title="Azalt" onPress={decreament}></Button>
    </View>
  );
};
