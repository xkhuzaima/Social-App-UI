import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {greytext, heading, headingbold, title} from '../../misc/Fonts';
import Icon from 'react-native-vector-icons/Ionicons';
import chats from '../../data/chat.json';
import Divider from '../../components/Divider';

const Chat = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.row}>
            <ScrollView horizontal>
              <TouchableOpacity>
                <Icon
                  name="camera-outline"
                  size={30}
                  color={'#a5a195'}
                  style={{
                    backgroundColor: '#f5efe3',
                    padding: 22,
                    borderRadius: 50,
                    margin: 5,
                    marginLeft: 10,
                  }}
                />
              </TouchableOpacity>
              <FlatList
                data={chats.chat}
                horizontal
                scrollEnabled={false}
                renderItem={({item}) => (
                  <Image
                    source={{uri: item.avatarurl}}
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 50,
                      margin: 5,
                      borderColor: 'grey',
                      borderWidth: 2,
                    }}
                  />
                )}
              />
            </ScrollView>
          </View>
          <Text style={heading}>Online</Text>
          <FlatList
            data={chats.chat.filter(item => item.isonline === true)}
            contentContainerStyle={{paddingBottom: 10, marginTop: 10}}
            scrollEnabled={false}
            renderItem={({item}) => (
              <>
                <TouchableOpacity style={styles.chatItem}>
                  <Image
                    source={{uri: item.avatarurl}}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 50,
                      margin: 5,
                      borderColor: 'grey',
                      borderWidth: 2,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 10,
                      width: '75%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text
                        style={[
                          greytext,
                          {color: '#000000', fontWeight: 'bold', marginTop: 10},
                        ]}>
                        {item.name}
                      </Text>
                      <Text style={greytext}>{item.lastmsg}</Text>
                    </View>
                    <View>
                      {item.unreadmsgs >= 1 && item.unreadmsgs <= 9 ? (
                        <Text
                          style={[
                            greytext,
                            {
                              alignSelf: 'flex-end',
                              backgroundColor: 'tomato',
                              borderRadius: 50,
                              paddingHorizontal: 5,
                              width: 20,
                              color: 'white',
                            },
                          ]}>
                          {item.unreadmsgs}
                        </Text>
                      ) : null}
                      {item.unreadmsgs > 9 ? (
                        <Text
                          style={[
                            greytext,
                            {
                              alignSelf: 'flex-end',
                              backgroundColor: 'tomato',
                              borderRadius: 50,
                              paddingHorizontal: 5,
                              width: 30,
                              color: 'white',
                            },
                          ]}>
                          9+
                        </Text>
                      ) : null}
                      {item.lastonline === 'RN' ? (
                        <Text
                          style={{
                            backgroundColor: '#1ed760',
                            width: 20,
                            height: 20,
                            marginTop: 10,
                            borderRadius: 50,
                          }}>
                          .
                        </Text>
                      ) : (
                        <Text style={[greytext, {marginTop: 10}]}>
                          {item.lastonline}
                        </Text>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                <Divider />
              </>
            )}
          />
          <Text style={heading}>Offline</Text>
          <FlatList
            data={chats.chat.filter(item => item.isonline === false)}
            contentContainerStyle={{paddingBottom: 250, marginTop: 10}}
            scrollEnabled={false}
            renderItem={({item}) => (
              <>
                <TouchableOpacity style={styles.chatItem}>
                  <Image
                    source={{uri: item.avatarurl}}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 50,
                      margin: 5,
                      borderColor: 'grey',
                      borderWidth: 2,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 10,
                      width: '75%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text
                        style={[
                          greytext,
                          {color: '#000000', fontWeight: 'bold', marginTop: 10},
                        ]}>
                        {item.name}
                      </Text>
                      <Text style={greytext}>{item.lastmsg}</Text>
                    </View>
                    <View>
                      {item.unreadmsgs >= 1 && item.unreadmsgs <= 9 ? (
                        <Text
                          style={[
                            greytext,
                            {
                              alignSelf: 'flex-end',
                              backgroundColor: 'tomato',
                              borderRadius: 50,
                              paddingHorizontal: 5,
                              width: 20,
                              color: 'white',
                            },
                          ]}>
                          {item.unreadmsgs}
                        </Text>
                      ) : null}
                      {item.unreadmsgs > 9 ? (
                        <Text
                          style={[
                            greytext,
                            {
                              alignSelf: 'flex-end',
                              backgroundColor: 'tomato',
                              borderRadius: 50,
                              paddingHorizontal: 5,
                              width: 30,
                              color: 'white',
                            },
                          ]}>
                          9+
                        </Text>
                      ) : null}
                      {item.lastonline === 'RN' ? (
                        <Text
                          style={{
                            backgroundColor: '#1ed760',
                            width: 20,
                            height: 20,
                            marginTop: 10,
                            borderRadius: 50,
                          }}>
                          .
                        </Text>
                      ) : (
                        <Text style={[greytext, {marginTop: 10}]}>
                          {item.lastonline}
                        </Text>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                <Divider />
              </>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },

  chatItem: {
    flexDirection: 'row',
  },
});
