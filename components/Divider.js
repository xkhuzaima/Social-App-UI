import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Divider = () => {
  return <View style={styles.Divider}></View>;
};

export default Divider;

const styles = StyleSheet.create({
  Divider: {
    marginVertical: 5,
    backgroundColor: 'lightgrey',
    height: 1,
    width: '100%',
  },
});
