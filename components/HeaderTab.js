import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {greytext} from '../misc/Fonts';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../misc/Colors';

const HeaderTab = props => {
  return (
    <TouchableOpacity
      style={[
        styles.Hbtn,
        {
          backgroundColor:
            props.active === props.title ? '#fbf3e6' : Colors.secondary,
        },
      ]}
      onPress={() => props.setActive(props.title)}>
      <Text>
        <Icon name={props.icon} size={20} color={'#000000'} />{' '}
        {props.active === props.title ? (
          <Text style={[greytext, {color: '#000000', fontWeight: 'bold'}]}>
            {props.title}
          </Text>
        ) : null}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderTab;

const styles = StyleSheet.create({
  Hbtn: {
    padding: 5,
    borderRadius: 20,
  },
});
