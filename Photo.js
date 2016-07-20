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

export default class Photo extends Component{
  render() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
            <Text>{this.props.title}</Text>
            </View>

            <View style={styles.frame}>
            <Text style={styles.frameheader}>请拍摄{this.props.title}</Text>
            <Image style= {styles.photo}
                source={require('./img/camera.png')}
                />
            </View>

            <View style={styles.footer}>
            </View>
        
      </View>
    );
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
  component: {
    marginBottom: 15,
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
  subheader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height/12,
    backgroundColor: '#9EC1DE',
  },
  buttonText: {
    color: 'white',
    textAlign: 'right'
  },
  sectiontitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: 1.2*height/12,
    backgroundColor: '#F6F6F6',
    marginTop: 5,
    borderColor: '#E9E9E9', 
    borderWidth: 0.5
  },
  section: {
    flex: 1,
    alignItems: 'center',
    height: 1.1*height/12,
    width: width,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    borderColor: '#E9E9E9', 
    borderWidth: 0.5
  },
  sectionlabel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 1.1*height/12,
    width: width/4
  },
  sectioncontent: {
    flex: 1,
    width: 2.6*width/4,
    marginRight: 200
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: 8*height/12,
    backgroundColor: 'white',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    width: width/3,
    height: height/25,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});