import React,{Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import axios from "axios";

import {
  //   SafeAreaView,
  //   StyleSheet,
  //   ScrollView,
  Spinner,
  View,
  Text,
  ToastAndroid,
  //   Image,
    TextInput,
    TouchableOpacity,
  //   StatusBar,
} from 'react-native';
import Iconz from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
        password: '',
        email :'',
      loginKey:false
    }

  }
  async componentDidMount() {
    try {
      if (await AsyncStorage.getItem('jwt')) {
        this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('AuthScreen');
      }
    } catch (error) {
      console.log(error);
    }
  }

  loginUser(){
    const formData= {
      email: this.state.email,
      password:this.state.password
    }
    
    
    axios.post(`http://192.168.100.155:9000/user/login`,formData)
  .then((res)=>{console.log('ini res, response,token',res,res.data.message,res.data.succes,res.data.token);
  
   if(res.data.succes === 1){
      AsyncStorage.setItem('jwt', res.data.token)
      this.setState({
        loginKey : true
       
      })(ToastAndroid.show('Login Success', ToastAndroid.SHORT)) 
    }else{
      (ToastAndroid.show(res.data.message,ToastAndroid.SHORT))
    }
    // console.log('async',AsyncStorage)

  }).catch(err =>{
    console.log(err)
  })
  
    console.log(formData)
    //fungsi login disini
    
  }
  
  
  render(){
    if(this.state.loginKey){
      return (
        
    this.props.navigation.navigate('Home')
      )
      }
    return(


<ScrollView style={{backgroundColor:'black'}}>

    <View style={{ flex:1,backgroundColor:'black'}}>
      <View style={{height:60}}></View>
      <View style={{backgroundColor:'black',height:80,alignItems:'center'}}>
      <Text style={{fontSize: 25, fontWeight: 'bold', color: '#E5E6EE'}}>

      Welcome to My Library Mobile App
      </Text> 
      </View>
      <View style={{
      height:60,alignItems:'center'}}>
     
   
      </View>
      <View style={{height:40}} style={{marginHorizontal:27}}>
        <Text style={{color:'white'}}>Email</Text>
        <View style={{justifyContent:'center'}}>
          <TextInput 
        
          onChangeText={(email) => this.setState({email: email})}
          // value={dataPostLogin.}
          style={{   backgroundColor: '#E5E6EE',
          borderWidth: 1,
          borderRadius: 0,
       
          height: 30,
          width:284
        }} />
        </View>
        <Text style={{color:'white'}}>Password</Text>
        <View>
          <TextInput 
            onChangeText={(password) => this.setState({password:password})}
            // value={dataPostLogin.password}
          placeholder={'input'}
          placeholder={''}
          secureTextEntry={true}
          style={{   backgroundColor: '#E5E6EE',
          borderWidth: 1,
          borderRadius: 0,
          
          height: 30,
          width:284}} />
        </View>
      </View>
      <View style={{height:40}}></View>
      <View style={{height:80}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:30}}>
        
          <Text style={{fontSize:22,color:'#4B4C72',fontWeight:"bold"}}>
            Sign
          </Text>
          <TouchableOpacity onPress={this.loginUser.bind(this)}>
          <Iconz name={'arrow-circle-right'} size={48} color={'blue'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginHorizontal:30, flexDirection: 'row',justifyContent:'space-between'}}>
       
      <View >
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Register')}}>
          <Text style={{fontSize:20,fontFamily:' Airbnb Cereal App',fontWeight:"bold",color:'#4B4C72'}}>
            Sign Up
          </Text>
          </TouchableOpacity>
          </View>
          <View>
        
          <Text style={{fontSize:20,fontFamily:' Airbnb Cereal App',fontWeight:"bold",color:'#4B4C72',left:20}}>
            Forgot Password
          </Text>
          </View>
          
          </View>
          
          
       
    

    </View>
    </ScrollView>
  );
    
  }
}

export default Login;
