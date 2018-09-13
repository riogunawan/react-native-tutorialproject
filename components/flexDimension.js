/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class flexDimension extends Component {
  render() {
    return (
      <View style={ {flex: 1} }>
          <View style={ {flex: 20, flexDirection: 'row', padding: 10} }>
              <Text style={ {flex: 60, backgroundColor: 'red'} }></Text>
              <Text style={ {flex: 40, backgroundColor: 'green'} }></Text>
              <Text style={ {width: 100, backgroundColor: 'blue'} }></Text>
          </View>
          <View style={ {
              flex: 80,
              backgroundColor: '#2196F3',
              flexDirection: 'column',
              // justifyContent: 'flex-start', //meletakkan objek sudut kiri atas
              // justifyContent: 'flex-end', //akan meletakkan objek sudut kiri bawah
              // justifyContent: 'space-between', //spasi objek antar objek
              // justifyContent: 'space-around', //spasi disekitar objek
              justifyContent: 'center', //tengah
              alignItems: 'stretch',
          } }>
              <Text style={ {height: 50, backgroundColor: '#555'} }></Text>
              <Text style={ {width: 50, height: 50, backgroundColor: '#fff'} }></Text>
          </View>
          <View style={ {height: 100, backgroundColor: '#9575CD'} } />
      </View>
    );
  }
}
