import {View} from 'react-native';
import React, {useEffect} from 'react';

export const Products = () => {
  useEffect(() => {
    //burada fonksiyon tarzı işlevler yazılır. OnInit tarzı çalışır.
    (async () => {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => {
          console.log(json);
        });
    })();
  }, []);

  return <View></View>;
};
