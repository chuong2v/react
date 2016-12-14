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

export default class Calculator extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.number}>1</Text>
            <Text style={styles.characters}>~</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.number}>2</Text>
            <Text style={styles.characters}>ABC</Text>
          </View>
          
          <View style={styles.column}>
            <Text style={styles.number}>3</Text>
            <Text style={styles.characters}>DEF</Text>
          </View>
        </View>
        
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.number}>4</Text>
            <Text style={styles.characters}>GHI</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.number}>5</Text>
            <Text style={styles.characters}>JKL</Text>
          </View>
          
          <View style={styles.column}>
            <Text style={styles.number}>6</Text>
            <Text style={styles.characters}>MNO</Text>
          </View>
        </View>
        
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.number}>7</Text>
            <Text style={styles.characters}>PQRS</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.number}>8</Text>
            <Text style={styles.characters}>TUV</Text>
          </View>
          
          <View style={styles.column}>
            <Text style={styles.number}>9</Text>
            <Text style={styles.characters}>WXYZ</Text>
          </View>
        </View>
        
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.number}>*</Text>
            <Text style={styles.characters}>,</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.number}>0</Text>
            <Text style={styles.characters}>+</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.number}>#</Text>
            <Text style={styles.characters}>.</Text>
          </View>
        </View>
      
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
    flexDirection: 'column'
  },
  row: {
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  column: {
    textAlign: 'center',
    color: '#333333',
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number:{
    fontSize: 48
  },
  characters: {
    fontSize: 18
  }
});

AppRegistry.registerComponent('Calculator', () => Calculator);
