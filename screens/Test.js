import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {Colors} from './misc/Colors';
import {greytext, heading, headingbold, title} from '../misc/Fonts';
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={{backgroundColor: Colors.primary, flex: 1}}>
      <View
        style={{
          backgroundColor: Colors.secondary,
          borderRadius: 20,
          paddingHorizontal: 10,
          paddingTop: 35,
        }}>
        <Text style={title}>Title</Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.tertiary,
          borderRadius: 20,
          paddingHorizontal: 10,
          paddingTop: 35,
        }}>
        <Text style={title}>Title</Text>
      </View>
      <Text style={title}>Hello World</Text>
      <Text style={headingbold}>Hello World</Text>
      <Text style={heading}>Hello World</Text>
      <Text style={greytext}>Hello World</Text>
      <Icon name="heart" size={20} color={Colors.elements} />
      <Icon name="bookmark-outline" size={20} color={Colors.grey} />
      <Icon name="send-outline" size={20} color={Colors.grey} />
    </View>
  );
}
