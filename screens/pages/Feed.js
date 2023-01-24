import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SearchBox from '../../components/SearchBox';
import {title} from '../../misc/Fonts';
import {Colors} from '../../misc/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import feeds from '../../data/feed.json';
import FeedItem from '../../components/FeedItem';

const Feed = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerSec}>
        <SearchBox uname={'Jacob'} />
        <TouchableOpacity>
          <Icon
            name="cloud-upload-outline"
            size={20}
            color={'#000000'}
            style={{borderWidth: 1, borderRadius: 30, padding: 15}}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={feeds.feed}
        contentContainerStyle={{paddingBottom: 280}}
        renderItem={({item}) => <FeedItem data={item} />}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    backgroundColor: '#ffffff',
  },

  headerSec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: Colors.tertiary,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    backgroundColor: Colors.tertiary,
  },
});
