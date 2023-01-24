import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {greytext, heading, title} from '../misc/Fonts';
import Icon from 'react-native-vector-icons/Ionicons';

const FeedItem = props => {
  return (
    <View style={styles.feedItem}>
      <View style={styles.feedItemHeader}>
        <View style={{flexDirection: 'row'}}>
          <Image source={{uri: props.data.avatarurl}} style={styles.avatar} />
          <View style={{marginLeft: 10}}>
            <Text style={heading}>{props.data.name}</Text>
            <Text style={greytext}>{props.data.posttime}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Icon name="ellipsis-horizontal-outline" size={25} color={'grey'} />
          </TouchableOpacity>
          <Text> </Text>
          <TouchableOpacity>
            <Icon name="close-outline" size={25} color={'grey'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginHorizontal: 10}}>
        <Image source={{uri: props.data.postimg}} style={styles.postImage} />
        <Text style={[greytext, {marginTop: 10, color: '#000000'}]}>
          {props.data.posttext}
        </Text>
        <View style={[styles.row, {marginTop: 10}]}>
          <View style={styles.rowAtt}>
            <Icon name="heart-outline" size={25} color={'#000000'} />
            <Text
              style={[
                greytext,
                {
                  marginTop: 2,
                  marginLeft: 5,
                  fontWeight: 'bold',
                  color: '#000000',
                },
              ]}>
              {props.data.likes} Likes
            </Text>
          </View>
          <View style={styles.rowAtt}>
            <Icon name="bookmark-outline" size={25} color={'#000000'} />
            <Text
              style={[
                greytext,
                {
                  marginTop: 2,
                  marginLeft: 5,
                  fontWeight: 'bold',
                  color: '#000000',
                },
              ]}>
              {props.data.saved} Saved
            </Text>
          </View>
          <View style={styles.rowAtt}>
            <Icon name="arrow-redo-outline" size={25} color={'#000000'} />
            <Text
              style={[
                greytext,
                {
                  marginTop: 2,
                  marginLeft: 5,
                  fontWeight: 'bold',
                  color: '#000000',
                },
              ]}>
              {props.data.share} Share
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeedItem;

const styles = StyleSheet.create({
  feedItem: {
    width: '100%',
    marginBottom: 20,
  },

  feedItemHeader: {
    padding: 10,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },

  postImage: {
    alignSelf: 'center',
    width: '100%',
    borderRadius: 20,
    height: 200,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rowAtt: {
    flexDirection: 'row',
  },
});
