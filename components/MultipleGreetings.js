import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Greeting extends Component {
    render() {
        let greetingString = `

            Hello ${ this.props.name }. Siapa?
        `
      return (
        <Text>{ greetingString }</Text>
      );
    }
}

export default class MultipleGreetings extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Greeting name="Rio Gunawan"></Greeting>
          <Greeting name="Dini"></Greeting>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
