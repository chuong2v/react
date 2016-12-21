import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, TextInput, Text, View} from 'react-native';

export default class MyInput extends Component {
   constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text>{this.state.text}</Text>
        <TouchableOpacity style={styles.button} onPress={this.props.clickBack}> 
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
      </View>
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
  button: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },
  text: {
    color: 'blue',
    fontSize: 100
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1
  }
});
