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
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';

const Container = styled.View`
  justifyContent: center;
  alignItems: center;
  margin-top: 300px
`;

const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'purple'];

export default class fluentConf2 extends Component {
  state = { ticks: 0, textColor: 'lime' };

  ticker = Observable.timer(1000,1000/60);
  
  componentDidMount() {
    this.subscription = this.ticker
      .map(numberFromTicker => numberFromTicker % colors.length)
      .map(index => colors[index])
      .subscribe(nameOfColor => this.setState({
        textColor: nameOfColor
      }))
  }
  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  render() {
    return (
      <Container>
        <Text style={{color: this.state.textColor}}>
          Welcome to JavaScript Jeopardy! 
        </Text>
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
