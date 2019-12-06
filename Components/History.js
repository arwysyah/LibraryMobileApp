import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet,RefreshControl} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Navbar from './Navbar';
import decode from 'jwt-decode';
import axios from 'axios';

import Histroies from './Histories';
import {ScrollView} from 'react-native-gesture-handler';
class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
    };
  }

  async componentDidMount() {
    const userToken = await AsyncStorage.getItem('jwt');
    const user = await decode(userToken);
    const userId = user.result.id;
    console.log('inininini', userId, 'user');
    axios
      .get(`http://192.168.100.155:9000/history/${userId}`)
      .then(result => {
        console.log(result, 'res');
        this.setState({
          history: result.data.response,
        });
        console.log('result data', result.data.response);
        console.log('object', this.state.history);
      })
      .catch(error => {
        console.log(error);
      });

    console.log(userId);
    console.log("object",result.data.response)
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1}}>
          <View
            style={{
           backgroundColor:'grey',
              height: 150,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 30, textAlign: 'center',fontWeight:'bold'}}>
              This is Your History
            </Text>
          </View>
          {this.state.history.map((history,index)=>(
          <View style={{ flex: 1}}
          key={index}>
            <View style={{height: 300}}>
              <View
                style={{
                  top:20,
                  height: 185,
                  width: 124,
                  borderRadius: 15,
                
                  flexDirection:'row',
                  marginHorizontal:40
                }}>
                <Image
                  style={{height: 185, width: 124, borderRadius: 15}}
                  source={{uri : history.image_url}}
                />
                  <View style={{top: 40, paddingLeft: 10, alignItems: 'center'}}>
                  <Text style={{fontSize: 18}}>{history.status}</Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight:'bold',
                      alignItems: 'center',
                     
                    }}>
                    {history.tittle}
                  </Text>
                  
                </View>
              </View>
            </View>
          
          </View>
            ))} 
            
        </View>
        
        
      </ScrollView>
    );
  }
}
export default History;

const styles = StyleSheet.create({
  button: {
    left: 5,
    alignItems: 'center',
    top: -70,
    textAlign: 'center',
    justifyContent: 'center',
    height: 35,
    width: 120,
    // shadowColor:'black',
    backgroundColor: 'yellow',
    borderRadius: 15,
    // shadowOpacity:100,
    borderTopColor: 'black',
    // shadowOffset:30
  },
});
