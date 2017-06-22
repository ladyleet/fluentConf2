/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styled from 'styled-components/native';
import { TabNavigator } from 'react-navigation';
import Angular from './Angular';
import Vue from './Vue';
import Ember from './Ember';

const Container = styled.View`
  justifyContent: center;
  alignItems: center;
  margin-top: 300px;
`;

const StyledText = styled.Text`
  color: red;
`;

export default class fluentConf2 extends Component {
  render() {
    return (
      <Container>
        <StyledText>
          Welcome to JavaScript Jeopardy
        </StyledText>
      </Container>
    );
  }
}

const mainNavigator = TabNavigator({
  Home: {
    screen: fluentConf2,
    path: ''
  },
  Angular: {
    screen: Angular,
    path: 'angular'
  },
  Vue: {
    screen: Vue,
    path: 'vue'
  },
  Ember: {
    screen: Ember,
    path: 'ember'
  }
});

AppRegistry.registerComponent('fluentConf2', () => mainNavigator);
