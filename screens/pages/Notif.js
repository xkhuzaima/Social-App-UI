import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {title} from '../../misc/Fonts';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text style={title}>Notifications</Text>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height - 300,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
