import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
export default class SplashScreen extends Component {

 async componentDidMount() {
  {
    try {
      if (await AsyncStorage.getItem('jwt')) {
        setTimeout(() => {
          // go to Home page
          this.props.navigation.navigate('App');
        }, 3000);
      } else {
        setTimeout(() => {
          // go to Login page
          this.props.navigation.navigate('AuthScreen');
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

  render() {
    return (
      <View style={{backgroundColor:'black',flex:1}}>
      <View
        style={{
          height: 300,
          alignContent: 'center',
          justifyContent: 'center',
          top: 150,
          backgroundColor:'black'
        }}>
        <Text style={{textAlign: 'center', fontSize: 40, color: 'green'}}>
          Welcome To Library Mobile App
        </Text>
       
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#00ff00" />
          {/* <ActivityIndicator size="small" color="#00ff00" /> */}
          {/* <ActivityIndicator size="large" color="#0000ff" />
      <ActivityIndicator size="small" color="#00ff00" /> */}
        </View>
        <Image
                        source={require('./assets/arwy.jpg')}
                        style={{
                          alignContent:'center',
                          height: 136,
                          width: 216,
                          left:80,

                          borderRadius: 15,
                        }}
                      />
        <Text style={{textAlign:'center',top:20,color:'green'}}>This Mobile APP created by ARWY SYAHPUTRA SIREGAR</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
