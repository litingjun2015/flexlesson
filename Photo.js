'use strict';

import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View,
  StyleSheet,
  ToolbarAndroid,
  BackAndroid,
  Dimensions,
  ScrollView,
  Image,
  TextInput,
  Picker } from 'react-native';

  
var _navigator;

export default class Photo extends Component{
  constructor(props) {
    super(props);    
    console.log(this.props);
    console.log(props.navigator); 

    _navigator = props.navigator;
  }

  navCamera(){
    console.log(this.props);
    this.props.navigator.push({
      id: 'camera'
    })
  }

  render() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
            <Text>{this.props.title}</Text>
            </View>

            <View style={styles.frame} >
                <Text style={styles.frameheader}>请拍摄{this.props.title}</Text>

                <TouchableHighlight onPress={this.navCamera.bind(this)}>
                    <Image style= {styles.photo}
                        source={require('./img/camera.png')}
                        />
                </TouchableHighlight>


                
            </View>

            

            <View style={styles.footer}>
            </View>
        
      </View>
    );
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

}

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',    
  },
  photo: {
    height:80/1.5, 
    width: 104/1.5    
  },
  frame: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: width/3-10,
    height: width/3-10
  },  
  header: {
    flex: 1,
    justifyContent: 'center',
    width: width/3,
    height: height/15,
  },
  frameheader: {
    justifyContent: 'center',
    height: height/20,
    color:'#EEEEEE'
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
    padding: 10,
    margin: 40
  }
});