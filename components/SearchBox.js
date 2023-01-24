import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Colors} from '../misc/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBox = props => {
  return (
    <View style={styles.searchBoxContainer}>
      <TextInput
        placeholder={`What's on your mind, ${props.uname}`}
        placeholderTextColor={'#353535'}
        style={styles.searchBox}
      />
      <Icon
        name="camera-outline"
        size={30}
        color={'#000000'}
        style={{marginTop: 5}}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchBoxContainer: {
    borderRadius: 30,
    width: '80%',
    borderWidth: 1,
    borderColor: Colors.grey,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  searchBox: {
    color: '#000000',
    width: '80%',
  },
});
