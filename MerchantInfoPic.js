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

import Photo from './Photo.js';
import CameraComponent from './CameraComponent.js';

export default class Second extends Component{

  constructor(props) {
    super(props);   
    //this.props.menmianPhotoSrc = './img/camera.png';
    console.log(props); 
    console.log(props.navigator); 
  }
  
  render() {
    return (
        <View style={styles.container}>

        <View style={styles.header}>
          <Text style={{color: 'white'}}>资料</Text>
        </View>
        <View style={styles.subheader}>
          <Text style={{color: 'white'}}>图片资料</Text>
          <Text style={styles.buttonText}>›</Text>
        </View>
        
        
        
        <View style={styles.content}>

        <ScrollView>
          <View>

          <View style={styles.sectiontitle}>
            <Text>商户经营环境</Text>
          </View>

          <View>
            <View style={styles.section}>
                <Photo title={'门面照'} navigator={this.props.navigator} type={'memmian'}/>
                <Photo title={'收银台'} navigator={this.props.navigator}/>
                <Photo title={'经营环境'} navigator={this.props.navigator}/>
            </View>
          </View>



          <View style={styles.sectiontitle}>
            <Text>营业执照</Text>
          </View>

          <View>
            <View style={styles.section}>
                <Photo navigator={this.props.navigator}/>
            </View>
          </View>

          <View style={styles.sectiontitle}>
            <Text>企业法人</Text>
          </View>

          <View>
            <View style={styles.section}>
                <Photo navigator={this.props.navigator}/>
                <Photo navigator={this.props.navigator}/>
            </View>
          </View>


          <View style={styles.sectiontitle}>
            <Text>银行卡</Text>
          </View>

          

              
          </View>
          <View></View>



        </ScrollView>

        </View>


        <View style={styles.footer}>
          <Text>footer</Text>
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
    backgroundColor: '#F5FCFF',
  },
  component: {
    marginBottom: 15,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height/10,
    backgroundColor: '#77AAD0'
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
    justifyContent: 'center',
    alignItems: 'center',
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
    alignItems: 'center',
    width: width,
    height: height/12,
    backgroundColor: '#77AAD0',
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