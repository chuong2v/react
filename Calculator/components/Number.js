import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export default class Number extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.wrapper} onPress={this.props.clickBack}>
        <Text style={styles.number}>{this.props.number}</Text>
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },
  number: {
    color: 'blue',
    fontSize: 100
  }
})
