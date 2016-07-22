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
    this.state = {
      localsource:'',
    }

    console.log(this.props);
    console.log(props.navigator); 

    _navigator = props.navigator;
  }


  navCamera(){
    const self=this;

    console.log(this.props);
    this.props.navigator.push({
      id: this.props.type,
      params: {
        getLocalsource: function (localsource) {
          self.setState({
            localsource: localsource
          })
        }
      }
    })
  }

  render() {

    var frame;

    if(this.state.localsource==''){
      console.log(this.state.localsource);
      frame = <View style={styles.frame} >
                <Text style={styles.frameheader}>请拍摄{this.props.title}</Text>

                <TouchableHighlight onPress={this.navCamera.bind(this)}>
                    <Image style= {styles.cameraphoto}
                        source={require('./img/camera.png')}
                        />
                </TouchableHighlight>                
            </View>;
    }
    else
    {
      console.log(this.props);
      console.log(this.state.localsource);
      console.log('./img/favicon.png');
      
      frame = <View style={styles.frame} >                

                <TouchableHighlight onPress={this.navCamera.bind(this)}>
                    <Image 
                        style= {styles.photo}
                        source={{uri: this.state.localsource}}
                        //source={require('./img/favicon.png')}
                        //source={require('content://media/external/images/media/279919')}
                        />
                </TouchableHighlight>                
            </View>;
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
            <Text>{this.props.title}</Text>
            </View>

            {frame}
            

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
    width: width/3-10,
    height: width/3-10 
  },
  cameraphoto: {
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
  footer: {
    flex: 1,
    justifyContent: 'center',
    width: width/3,
    height: height/25,
  },
});