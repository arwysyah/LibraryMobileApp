import React, {Component} from 'react';
import {View, Text, TouchableOpacity,Icon, Button,Image, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Navbar from './Navbar';
import decode from 'jwt-decode';
import axios from 'axios';

import Histroies from './Histories';
import {ScrollView} from 'react-native-gesture-handler';
class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Wishlist: [],
      
    };
  }
  // async refresh() {
  //   const userToken = await AsyncStorage.getItem('jwt');
  //   const user = await decode(userToken);
  //   const userId = user.result.id;
  //   axios
  //     .get(
  //       `http://192.168.100.155:9000/history/${userId}`,
  //     )
  //     .then(result => {
  //       this.setState({
  //         Wishlists: result.data.response,
  //       });
  //     })
  //   }

  async componentDidMount() {
    const userToken = await AsyncStorage.getItem('jwt');
    const user = await decode(userToken);
    const userId = user.result.id;
    this.setState({refresh:false})
    
  
   axios.get(`http://192.168.100.155:9000/wishlists/${userId}`).then(result => {
      console.log(result, 'res');
      this.setState({
        Wishlist: result.data.response,
      });
      console.log('result data', result.data.response);
      console.log('object', this.state.Wishlist);
    })
    .catch(error => {
      console.log(error);
    });

  console.log(userId);
  }

  render() {
    return (
      
      <ScrollView>
         {/* <TouchableOpacity onPress={() => this.refresh()}> */}
                  {/* <Text></Text> */}
              {/* <Button 
                transparent
                onPress={() => this.refresh()}
                style={{height: 30}}>
                <Icon style={{color: 'black'}} name="refresh" />
              </Button> */}
            {/* </TouchableOpacity> */}
        <View style={{ flex: 1}}>
          <View
            style={{
           backgroundColor:'grey',
              height: 150,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 30, textAlign: 'center',fontWeight:'bold'}}>
              This is Your Wishlist
            </Text>
          </View>
          {this.state.Wishlist.map((Wishlist,index)=>(
          <View style={{ flex: 1}}
          key={index}>
              
            <View style={{height: 300}}>
              <View
                style={{
                  height: 185,
                  width: 124,
                  top:20,
                  borderRadius: 15,
                
                  flexDirection:'row',
                  marginHorizontal:40
                }}>
                <Image
                  style={{height: 185, width: 124, borderRadius: 15}}
                  source={{uri : Wishlist.image_url}}
                />
                  <View style={{top: 40, paddingLeft: 10, alignItems: 'center'}}>
                  <Text style={{fontSize: 30}}>{Wishlist.Author}</Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight:'bold',
                      alignItems: 'center',
                     
                    }}>
                    {Wishlist.tittle}
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
export default Wishlist;

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
