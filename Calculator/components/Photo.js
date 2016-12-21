import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Image, View} from 'react-native';

export default class Photo extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.wrapper}
                        onPress={this.props.clickBack}> 
        <Image style={styles.photo} 
            source={require("./../images/cake.jpg")} 
        />
      </TouchableOpacity>);
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
  photo: {
    height: 500,
    width: 300
  }
});
