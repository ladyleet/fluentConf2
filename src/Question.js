import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Question extends Component {
  render() {
    return (
      <View>
        <Text>
          Question: {this.props.q}
        </Text>
        <Text>
          Answer: {this.props.a}
        </Text>
      </View>
    );
  }
}