import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  margin: 20px;
`;

export default class ReactJS extends Component {
  render() {
    return (
      <Container>
        <Image source={require('./img/jeopardy-react.png')}/>
      </Container>
    );
  }
}