'use strict';

import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View,
  StyleSheet,
  ToolbarAndroid,
  BackAndroid } from 'react-native';

var _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    console.log(_navigator.getCurrentRoutes());
    _navigator.pop();
    return true;
  }
  return false;
});


// BackAndroid.addEventListener('hardwareBackPress', () => {
//   console.log(hardwareBackPress);
//   if (_navigator.getCurrentRoutes().length === 1  ) {
//      console.log(_navigator.getCurrentRoutes());
//      return false;
//   }
//   _navigator.pop();
//   return true;
// });

export default class SimpleNavigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'first', title: 'This is My Initial Scene', index: 0 }}
        renderScene={this.navigatorRenderScene}
      />
    )
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'first':
        return (<First navigator={navigator} title="first"/>);
      case 'second':
        return (<Second navigator={navigator} title="second" />);
    }
  }
}

class First extends Component{
  navSecond(){
    this.props.navigator.push({
      id: 'second'
    })
  }
  render() {

    return (
      <View style={styles.container}>
        
        <ToolbarAndroid style={styles.toolbar}
                        title={this.props.title}
                        titleColor={'#FFFFFF'}/>
        <TouchableHighlight onPress={this.navSecond.bind(this)}>
          <Text>Navigate to second screen</Text>
        </TouchableHighlight>
        
      </View>
    );
  }
}

class Second extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Second screen
        </Text>
      </View>
    );
  }
};

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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