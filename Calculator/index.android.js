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
  View,
  TouchableOpacity,
  Navigator
} from 'react-native';
import Number from './components/Number.js';
import Photo from './components/Photo.js';
import MyInput from './components/MyInput.js';

class Calculator extends Component {

  renderScene(route, navigator) {
    switch (route.name) {
      case 'main':
        return (
          <MainFrame
            click1={() => navigator.push({ name: 'number1' })}
            click2={() => navigator.push({ name: 'number2' })}
            click3={() => navigator.push({ name: 'number3' })}
            click4={() => navigator.push({ name: 'number4' })}
            click5={() => navigator.push({ name: 'number5' })}
            click6={() => navigator.push({ name: 'number6' })}
            click7={() => navigator.push({ name: 'number7' })}
            click8={() => navigator.push({ name: 'number8' })}
            click9={() => navigator.push({ name: 'number9' })}
            clickInput={() => navigator.push({ name: 'input' })}
            clickPhoto={() => navigator.push({ name: 'photo' })}></MainFrame>
        );
      case 'number1':
        return (<Number number="1" clickBack={() => navigator.pop({ name: 'main' })}/>);
      case 'number2':
        return (<Number number="2" clickBack={() => navigator.pop({ name: 'main' })}/>);
      case 'number3':
        return (<Number number="3" clickBack={() => navigator.pop({ name: 'main' })}/>);
      case 'number4':
        return (<Number number="4" clickBack={() => navigator.pop({ name: 'main' })}/>);
      case 'number5':
        return (<Number number="5" clickBack={() => navigator.pop({ name: 'main' })}/>);
      case 'number6':
        return (<Number number="6" clickBack={() => navigator.pop({ name: 'main' })}/>);
      case 'number7':
        return (<Number number="7" clickBack={() => navigator.pop({ name: 'main' })}/>);
      case 'number8':
        return (<Number number="8" clickBack={() => navigator.pop({ name: 'main' })}/>);
      case 'number9':
        return (<Number number="9" clickBack={() => navigator.pop({ name: 'main' })}/>);
      case 'input':
        return (<MyInput clickBack={() => navigator.pop({ name: 'main' })}/>);
      case 'photo':
        return (<Photo clickBack={() => navigator.pop({ name: 'main' })}/>);
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{
        name: 'main',
      }}
        renderScene={this.renderScene}></Navigator>
    );
  }
}

export default class MainFrame extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={this.props.click1}>
            <View style={styles.column}>
              <Text style={styles.number}>1</Text>
              <Text style={styles.characters}>~</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.props.click2}>
            <View style={styles.column}>
              <Text style={styles.number}>2</Text>
              <Text style={styles.characters}>ABC</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.props.click3}>
            <View style={styles.column}>
              <Text style={styles.number}>3</Text>
              <Text style={styles.characters}>DEF</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={this.props.click4}>
            <View style={styles.column}>
              <Text style={styles.number}>4</Text>
              <Text style={styles.characters}>GHI</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.props.click5}>
            <View style={styles.column}>
              <Text style={styles.number}>5</Text>
              <Text style={styles.characters}>JKL</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.props.click6}>
            <View style={styles.column}>
              <Text style={styles.number}>6</Text>
              <Text style={styles.characters}>MNO</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={this.props.click7}>
            <View style={styles.column}>
              <Text style={styles.number}>7</Text>
              <Text style={styles.characters}>PQRS</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.props.click8}>
            <View style={styles.column}>
              <Text style={styles.number}>8</Text>
              <Text style={styles.characters}>TUV</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.props.click9}>
            <View style={styles.column}>
              <Text style={styles.number}>9</Text>
              <Text style={styles.characters}>WXYZ</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={this.props.clickInput}>
            <View style={styles.column}>
              <Text style={styles.number}>*</Text>
              <Text style={styles.characters}>,</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={styles.column}>
              <Text style={styles.number}>0</Text>
              <Text style={styles.characters}>+</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.props.clickPhoto}>
            <View style={styles.column}>
              <Text style={styles.number}>#</Text>
              <Text style={styles.characters}>.</Text>
            </View>
          </TouchableOpacity>
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
    flexDirection: 'column',
  },
  row: {
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    textAlign: 'center',
    color: '#333333',
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  number: {
    fontSize: 48,
  },
  characters: {
    fontSize: 18,
  },
});

AppRegistry.registerComponent('Calculator', () => Calculator);
