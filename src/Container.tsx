/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';

type ContainerProps = PropsWithChildren<{
  width: number;
  height: number;
  variant: 'primary' | 'warning' | 'error';
}>;
//* burda children tanımlamadık fakat 'PropsWithChildren' ile ekstra prop varmış gibi kullanabiliriz.

export const Container = ({
  width,
  height,
  variant,
  children,
}: ContainerProps) => {
  return (
    <View
      style={{
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height,
        borderRadius: width / 2,
        backgroundColor:
          variant === 'primary'
            ? '#8dcce0'
            : variant === 'warning'
            ? '#ecec98'
            : '#e4e4e4',
      }}>
      {children}
    </View>
  );
};
