import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Image,StyleSheet,} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Navbar from './Navbar'

class Histories extends Component{
    constructor(props){
       
        super(props) 
        this.state={
            isToken:false
        }
    }
    async deleteToken  (){
      try {
        await AsyncStorage.removeItem('jwt')
        this.props.navigation.navigate('login')
      } catch (err) {
        console.log(`The error is: ${err}`)
      }
    }
    
    
    render(){
      

    let token = AsyncStorage.jwt  //jwt nama localstoragenya
    console.log('local',AsyncStorage,token)
    // let profile,username,level,email, id
    // if(token){
    //   profile = decode(token)
    //   level = profile.result.level
    //   username=profile.result.username
    //   email = profile.result.email
    //   id= profile.result.id
    //   console.log("ini levelnya",level,username)
    // console.log("ini profile",profile,level)
        return(
            <View style={{backgroundColor:'#3bbce3',flex:1}}>
                <View style={{backgroundColor:'#bec4c4',height:400}}>
                    <View style={{backgroundColor:'#3bbce3',height:120}}>
                        <View style={{height:50}}
                        ></View>
                        <Text style={{alignContent:'center',marginTop:15,textAlign:'center',fontSize:35,fontWeight:'bold'}}> User Profile</Text>
                    </View>
                    <View style={{backgroundColor:'#3bbce3',height:250,justifyContent:'center',alignItems:'center'}}>
                        <Image 
                        source={require('./assets/profileuser.png')}
                        style={{height:200,width:200,borderRadius:100}} />

                    </View>
                    <Text style={{fontSize:23,textAlign:'center'}}> Username</Text>

                   
                </View>
                <View>
                <Text style={{fontSize:23,textAlign:'center',backgroundColor:'#bec4c4',borderColor:'white'}}> Email</Text>
                </View>
                <View style={{height:110,}}>
                  
                </View>
                <TouchableOpacity 
                onPress= {() =>{ this.deleteToken() }}
               style= {styles.button}>
                    
                    <Text style={{fontSize:18}}>Logout</Text>
                </TouchableOpacity>
               

            </View>
        )
    }
}
export default Histories


const styles = StyleSheet.create({
    button: {
        left:5,
      alignItems: 'center',
        top:-70,
      textAlign: 'center',
      justifyContent: 'center',
      height: 35,
      width: 120,
      // shadowColor:'black',
      backgroundColor: 'yellow',
      borderRadius: 15,
      // shadowOpacity:100,
      borderTopColor:'black',
      // shadowOffset:30
    },
  });