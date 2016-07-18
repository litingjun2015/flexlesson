import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet,
    ToolbarAndroid
     } from 'react-native';

export default class Navigation extends Component {
  render() {
    console.log('render');

//renderScene={this.navigatorRenderScene}/>

    return (
      <Navigator
        style={styles.container}
        initialRoute={{id: 'first',title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed           
            onForward={ () => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    );
  }




  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'first':
        console.log('first');
        return (<First navigator={navigator} title="first"/>);
      case 'second':
        console.log('second');
        return (<Second navigator={navigator} title="second" />);
    }
  }
}

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

class First extends Component{
  navSecond(){
    this.props.navigator.push({
      id: 'second'
    })
  }
  render() {
      console.log('First render3');

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>

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