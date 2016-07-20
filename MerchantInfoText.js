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

   
class First extends Component{
  

  constructor(props) {
    super(props);
    var _scrollView = ScrollView;
    this.state = { text: 'Useless Placeholder', value: 1,
  
      accountType: [{label: '对公账户', value: 0}, {label: '个人账户', value: 1},],
      accountTypeValue: 0,
      accountTypeIndex: 0, 
    
  };

    console.log(this.state);
    
    
  }

  

  
  navSecond(){
    this.props.navigator.push({
      id: 'second'
    })
  }

  press(){
    if(this.state.value==0)
      this.setState({value:1})
    else
      this.setState({value:0})
    console.log(this.state);
  }

  

  render() {

    var zhanghu;

    if(this.state.accountType[this.state.accountTypeIndex].label=='对公账户'){
      // zhanghu = <View style={styles.header}>
      //     <Text style={{color: 'white'}}>资料</Text>
      //   </View>;
    }
    

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
              <RadioForm formHorizontal={true} animation={true} >
                {this.state.accountType.map((obj, i) => {
                  var onPress = (value, index) => {
                      this.setState({
                        accountTypeValue: value,
                        accountTypeIndex: index
                      })
                    }
                  return (
                    <RadioButton labelHorizontal={true} key={i} >
                      {/*  You can set RadioButtonLabel before RadioButtonInput */}
                      <RadioButtonInput
                        obj={obj}
                        index={i}
                        isSelected={this.state.accountTypeIndex === i}
                        onPress={onPress}
                        buttonInnerColor={'#525252'}
                        buttonOuterColor={'#B3B3B3'}
                        buttonSize={8}
                        buttonStyle={{}}
                        buttonWrapStyle={{marginLeft: 10}}
                      />
                      <RadioButtonLabel
                        obj={obj}
                        index={i}
                        labelHorizontal={true}
                        onPress={onPress}
                        labelWrapStyle={{}}
                      />
                    </RadioButton>
                  )
                })}
              </RadioForm>
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

          <View style={styles.section}>
            <View style={styles.sectionlabel}> 
              <Text>开户银行</Text>
            </View>
            <View style={styles.sectioncontent}>
              <Picker
                selectedValue={this.state.bankName}
                //onValueChange={(bank) => this.setState({bankName: bank})}
                >
                <Picker.Item label="中国民生银行" value="中国民生银行" />
              </Picker>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionlabel}> 
              <Text>银行账号</Text>
            </View>
            <View style={styles.sectioncontent}>
              <TextInput
                placeholder='请输入开户银行账号'  
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

          <View style={styles.section}>
            <View style={styles.sectionlabel}> 
              <Text>联系人姓名</Text>
            </View>
            <View style={styles.sectioncontent}>
              <TextInput
                placeholder='请输入联系人姓名'  
                autoFocus={true}  
                textAlign='center'
                style={{height: 40, borderBottomColor: 'red', borderWidth: 1}}
                onChangeText={(companyLegalPerson) => this.setState({companyLegalPerson})}                
              />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionlabel}> 
              <Text>手机号码</Text>
            </View>
            <View style={styles.sectioncontent}>
              <TextInput
                placeholder='请输入联系人手机号码'  
                autoFocus={true}  
                textAlign='center'
                style={{height: 40, borderBottomColor: 'red', borderWidth: 1}}
                onChangeText={(merchantMobilePhone) => this.setState({merchantMobilePhone})}                
              />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionlabel}> 
              <Text>常用邮箱</Text>
            </View>
            <View style={styles.sectioncontent}>
              <TextInput
                placeholder='请输入常用邮箱'  
                autoFocus={true}  
                textAlign='center'
                style={{height: 40, borderBottomColor: 'red', borderWidth: 1}}
                onChangeText={(companyEmail) => this.setState({companyEmail})}                
              />
            </View>
          </View>

              
          </View>
          <View></View>



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