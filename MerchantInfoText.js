'use strict';

import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View,
  StyleSheet,
  ToolbarAndroid,
  BackAndroid,
  Dimensions,
  ScrollView,
  Image,
  TextInput } from 'react-native';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';  

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

export default class MerchantInfoText extends Component {
  

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

var radio_props = [
      {label: 'param1', value: 0 },
      {label: 'param2', value: 1 }
    ];
    
class First extends Component{
  

  constructor(props) {
    super(props);
    var _scrollView = ScrollView;
    this.state = { text: 'Useless Placeholder', value: 1 };
    
    
  }
  
  navSecond(){
    this.props.navigator.push({
      id: 'second'
    })
  }

  render() {

    

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={{color: 'white'}}>资料</Text>
        </View>
        <View style={styles.subheader}>
          <Text style={{color: 'white'}}>文字资料</Text>
          <Text style={styles.buttonText}>›</Text>
        </View>
        
        
        
        <View style={styles.content}>

        <ScrollView>
          <View>

          <View style={styles.sectiontitle}>
            <Text>商户基本信息</Text>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionlabel}> 
              <Text>商户名称</Text>
            </View>
            <View style={styles.sectioncontent}>
              <TextInput
                placeholder='请输入商户名称'  
                autoFocus={true}  
                textAlign='center'
                style={{height: 40, borderBottomColor: 'red', borderWidth: 1}}
                onChangeText={(merchantFullName) => this.setState({merchantFullName})}                
              />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionlabel}> 
              <Text>注册地址</Text>
            </View>
            <View style={styles.sectioncontent}>
              <TextInput
                placeholder='请输入注册地址'  
                autoFocus={true}  
                textAlign='center'
                style={{height: 40, borderBottomColor: 'red', borderWidth: 1}}
                onChangeText={(merchantRegAddress) => this.setState({merchantRegAddress})}                
              />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionlabel}> 
              <Text>客服电话</Text>
            </View>
            <View style={styles.sectioncontent}>
              <TextInput
                placeholder='请输入客服电话'  
                autoFocus={true}  
                textAlign='center'
                style={{height: 40, borderBottomColor: 'red', borderWidth: 1}}
                onChangeText={(servicePhone) => this.setState({servicePhone})}                
              />
            </View>
          </View>

          


          <View style={styles.sectiontitle}>
            <Text>结算账户</Text>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionlabel}> 
              <Text>账户类型</Text>
            </View>

            <View style={styles.sectioncontent}>
              <RadioForm
                radio_props={radio_props}
                initial={1}
                onPress={(value) => {this.setState({value:value})}}
              />
            </View>

          </View>

          

          <View style={styles.section}>
            <View style={styles.sectionlabel}> 
              <Text>开户名称</Text>
            </View>
            <View style={styles.sectioncontent}>
              <TextInput
                placeholder='请输入开户名称'  
                autoFocus={true}  
                textAlign='center'
                style={{height: 40, borderBottomColor: 'red', borderWidth: 1}}
                onChangeText={(bankAccountName) => this.setState({bankAccountName})}                
              />
            </View>
          </View>


          <View style={styles.sectiontitle}>
            <Text>联系人信息</Text>
          </View>

              
          </View>
          <View></View>

<TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
              />

        </ScrollView>

        </View>


        <View style={styles.footer}>
          <Text>footer</Text>
        </View>
        
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

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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