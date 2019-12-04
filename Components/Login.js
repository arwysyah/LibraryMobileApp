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
  //   Image,
    TextInput,
    TouchableOpacity,
  //   StatusBar,
} from 'react-native';
import Iconz from 'react-native-vector-icons/FontAwesome5';

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
        password: '',
        email :'',
      loginKey:false
    }
  }

  loginUser(){
    const formData= {
      email: this.state.email,
      password:this.state.password
    }
    
    
    axios.post(`http://192.168.100.155:8000/user/login`,formData)
  .then((res)=>{console.log('ini res, response,token',res,res.data.message,res.data.succes,res.data.token);
   if(res.data.succes === 1){
      AsyncStorage.setItem('jwt', res.data.token)
      this.setState({
        loginKey : true
      })
    }else{
      alert(res.data.message)
    }
    

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




    <View style={{ flex:1}}>
      <View style={{height:60}}></View>
      <View style={{backgroundColor:'white',height:40,alignItems:'center'}}>
      <Text style={{fontSize: 34, fontWeight: 'bold', color: '#4B4C72'}}>

      Welcome to My Website
      </Text> 
      </View>
      <View style={{
      height:10,alignItems:'center'}}>
     
   
      </View>
      <View style={{height:40}} style={{marginHorizontal:27}}>
        <Text>Email</Text>
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
        <Text>Password</Text>
        <View>
          <TextInput 
            onChangeText={(password) => this.setState({password:password})}
            // value={dataPostLogin.password}
          placeholder={'input'}
          placeholder={''}
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
        
          <Text style={{fontSize:20,fontFamily:' Airbnb Cereal App',fontWeight:"bold",color:'#4B4C72',left:50}}>
            Forgot Password
          </Text>
          </View>
          <View>
          </View>
          </View>
          
       
    

    </View>
  );
    
  }
}

export default Login;