import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {title} from '../../misc/Fonts';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={title}>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height - 300,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerSec: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
