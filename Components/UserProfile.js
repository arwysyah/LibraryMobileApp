import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Image,StyleSheet,Alert} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import decode from 'jwt-decode';


class UserProfile extends Component{
    constructor(props){
       
        super(props) 
        this.state={
            isToken:false,
            username:'',
            email:''
        }
    }
    async componentDidMount() {
      const data = await AsyncStorage.getItem('jwt');
      console.log(decode(data));
      const profile = decode(data);
      this.setState({
        username: profile.result.username,
        email: profile.result.email
      });
   
    }
    async deleteToken  (){
      Alert.alert(
        'Logout',
        'Are You Sure Want to Logout ?',
        [
         
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: async() => {
            try {
        
              await AsyncStorage.removeItem('jwt')
              this.props.navigation.navigate('Login')
            } catch (err) {
              console.log(`The error is: ${err}`)
            }

          }},
        ],
        {cancelable: false},
      )
      
     
    }
    
    
    render(){
      let token = AsyncStorage.jwt  
    console.log('local',AsyncStorage,token)
   
        return(
            <View style={{backgroundColor:'black',flex:1}}>
                <View style={{backgroundColor:'black',height:400}}>
                    <View style={{backgroundColor:'black',height:120}}>
                        <View style={{height:50}}
                        ></View>
                        <Text style={{alignContent:'center',marginTop:15,textAlign:'center',fontSize:35,fontWeight:'bold',color:'white'}}> User Profile</Text>
                    </View>
                    <View style={{backgroundColor:'black',height:250,justifyContent:'center',alignItems:'center'}}>
                        <Image 
                        source={require('./assets/profileuser.png')}
                        style={{height:200,width:200,borderRadius:100}} />

                    </View>
                    <Text style={{fontSize:23,textAlign:'center',color:'white'}}> {this.state.username}</Text>

                   
                </View>
                <View>
                <Text style={{fontSize:23,textAlign:'center',backgroundColor:'black',color:'white',borderColor:'white'}}>{this.state.email}</Text>
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
export default UserProfile


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
      backgroundColor: 'white',
      borderRadius: 15,
      // shadowOpacity:100,
      borderTopColor:'black',
      // shadowOffset:30
    },
  });