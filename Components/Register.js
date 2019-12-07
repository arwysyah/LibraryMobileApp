import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';
import {
  //   SafeAreaView,
  //   StyleSheet,
  //   ScrollView,
  Spinner,
  View,
  Text,
  //   Image,
  TextInput,
  ToastAndroid,  TouchableOpacity,
  //   StatusBar,
} from 'react-native';

import Iconz from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      username: '',
    };
  }

  registerUser() {
    const formData = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
    };

    Axios.post(`https://mybookcollections.herokuapp.com/user/register`, formData).then(res => {
      console.log(
        'ini res, response,token',
        res,
        res.data.message,
        res.data.succes,
        res.data.token,);ToastAndroid.show("Register succes",ToastAndroid.SHORT)
    this.props.navigation.navigate('Login')
      })
      .catch(error=>{
          console.log(error)
      })
  }

  render() {
    return (
      <ScrollView style={{backgroundColor:"black"}} >
        <View style={{flex: 1}}>
          <View style={{height: 60}}></View>
          <View
            style={{
              backgroundColor: 'black',
              height: 80,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
              }}>
            Welcome to My Library Mobile App
            </Text>
          </View>
          <View
            style={{
              height: 10,
              alignItems: 'center',
            }}></View>

          <View style={{height: 40}} style={{marginHorizontal: 35}}>
            <Text style={{color:"white"}}>Username</Text>
            <View>
              <TextInput
                onChangeText={username => this.setState({username: username})}
                // value={dataPostLogin.password}
                placeholder={'input'}
                placeholder={''}
                style={{
                  backgroundColor: '#E5E6EE',
                  borderWidth: 1,
                  borderRadius: 0,

                  height: 30, 
                  width: 284,
                }}
              />
            </View>
            <Text style={{color:"white"}}>Email</Text>
            <View style={{justifyContent: 'center'}}>
              <TextInput
                onChangeText={email => this.setState({email: email})}
                // value={dataPostLogin.}
                style={{
                  backgroundColor: '#E5E6EE',
                  borderWidth: 1,
                  borderRadius: 0,

                  height: 30,
                  width: 284,
                }}
              />
            </View>

            <Text style={{color:"white"}}>Password</Text>
            <View>
              <TextInput
                onChangeText={password => this.setState({password: password})}
                // value={dataPostLogin.password}
                placeholder={'input'}
                secureTextEntry={true}
                placeholder={''}
                style={{
                  backgroundColor: '#E5E6EE',
                  borderWidth: 1,
                  borderRadius: 0,

                  height: 30,
                  width: 284,
                }}
              />
            </View>
          </View>
          <View style={{height: 40}}></View>
          <View style={{height: 80}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 30,
              }}>
              <Text
                style={{fontSize: 22,top:15, color: '#4B4C72', fontWeight: 'bold'}}>
                Register
              </Text>
              <TouchableOpacity onPress={this.registerUser.bind(this)}>
                <Iconz name={'arrow-circle-right'} size={48} color={'green'} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
           
            <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                  this.props.navigation.navigate('Login');
                }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: ' Airbnb Cereal App',
                  fontWeight: 'bold',
                  color: '#4B4C72',
                  textAlign: 'center',
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                Sign In
                
              </Text>
              </TouchableOpacity>
            </View>
           
            <View>
              {/* <Text
                style={{
                  fontSize: 20,
                  fontFamily: ' Airbnb Cereal App',
                  fontWeight: 'bold',
                  color: '#4B4C72',
                  left: 50,
                }}>
                Forgot Password
              </Text> */}
            </View>
            <View></View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Register;
