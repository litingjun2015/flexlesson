'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';

export default class CameraComponent extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>请拍摄</Text>
        </Camera>
      </View>
    );
  }

  takePicture() {
    const self=this;

    this.camera.capture()
      .then(
        (data) => {
          console.log(data);
          console.log(data.path);

          console.log(self.props);
          if(self.props.getLocalsource)
          {
            console.log(self.props.getLocalsource);
            self.props.getLocalsource(data.path);
          }
          self.props.navigator.pop();
        }
      )
      .catch(err => console.error(err));    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 3,
    margin: 40
  }
});