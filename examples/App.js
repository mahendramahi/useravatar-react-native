/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import UserAvatar from 'react-native-useravatar';

export default class App extends Component {

    state = {
      username: 'User Name',
      userImage: 'https://picsum.photos/200',
      /// userImage1 is Url there no image exist 
      /// hit this url on web and you see some xml with AccessDenied code
      userImage1: 'https://truworth-video-in.s3-ap-south-1.amazonaws.com/foodimage/initial-image.png' 
    }

  render() {
    return (
      <View style={styles.container}>
      <UserAvatar
        src={this.state.userImage}
        name={this.state.username}
        size={35}
      />
      <Text style={{ fontSize: 18, color: '#000' }}>
        User Name
      </Text>
      <View style={{ marginTop: 30 }} />
      <UserAvatar
        src={this.state.userImage1}
        name={this.state.username}
        size={35}
      />
      <Text style={{ fontSize: 18, color: '#000' }}>
        User Name
      </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
