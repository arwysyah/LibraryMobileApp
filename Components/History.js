import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import decode from 'jwt-decode';
import axios from 'axios';
import {Icon, Button} from 'native-base';

import {ScrollView} from 'react-native-gesture-handler';
export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
    };
  }
  async refresh() {
    const userToken = await AsyncStorage.getItem('jwt');
    this.setState({
      userId: decode(userToken),
    });
    
    const user = await decode(userToken);
    const userId = user.result.id;
    
    axios
      .get(
        `https://mybookcollections.herokuapp.com/history/${userId}`,
      )
      .then(result => {
        this.setState({
          history: result.data.response,
        });
      })
      .catch(error => console.log(error));
  }

  async componentDidMount() {
    const userToken = await AsyncStorage.getItem('jwt');
    const user = await decode(userToken);
    const userId = user.result.id;
    console.log('inininini', userId, 'user');
    axios
      .get(`https://mybookcollections.herokuapp.com/history${userId}`)
      .then(result => {
        // console.log(result, 'res');
        this.setState({
          history: result.data.response,
        });
        // console.log('result data', result.data.response);
        // console.log('object', this.state.history);
      })
      .catch(err => {
        console.log(err);
      });

    // console.log(userId);
    // console.log("object",result.data.response)
  }

  dateFormat = date_data => {
    // console.log(date_data);
    let arrDate = String(date_data)
      .slice(0, 10)
      .split('-')
      .reverse();
    switch (Number(arrDate[1])) {
      case 1:
        arrDate[1] = ' January ';
        break;
      case 2:
        arrDate[1] = ' February ';
        break;
      case 3:
        arrDate[1] = ' March ';
        break;
      case 4:
        arrDate[1] = ' April ';
        break;
      case 5:
        arrDate[1] = ' Mei ';
        break;
      case 6:
        arrDate[1] = ' June ';
        break;
      case 7:
        arrDate[1] = ' Jule ';
        break;
      case 8:
        arrDate[1] = ' August ';
        break;
      case 9:
        arrDate[1] = ' September ';
        break;
      case 10:
        arrDate[1] = ' October ';
        break;
      case 11:
        arrDate[1] = ' November ';
        break;
      case 12:
        arrDate[1] = ' December ';
        break;
    }
    // console.log(arrDate);

    return arrDate;
  };

  render() {
    console.log(
      'history borrow at',
      this.state.history.borrow_at,
      this.state.history.return_at,
    );
    return (
      <View style={{backgroundColor:'black',flex:1}}>
        <View style={{backgroundColor:'black'}}>
          <Button
            transparent
            onPress={() => {
              this.props.navigation.goBack();
            }}>
               <Text
              style={{color: 'white', fontSize: 23, alignContent: 'center',left:140,fontWeight:"bold"}}>
              History
            </Text>
            <Icon style={{color: 'white',right:310}} name="arrow-back" />
            
          </Button>
         

        </View>

        <ScrollView>
        <TouchableOpacity onPress={() => this.refresh()}>
              <Button
                transparent
                onPress={() => this.refresh()}
                style={{height: 30}}>
                <Icon style={{color: 'white',right:-310}} name="refresh" />
              </Button>
            </TouchableOpacity>
          <View style={{flex: 1,
             
                backgroundColor: 'black',
                 color: '#ccc',}}>
            <View
              style={{
                backgroundColor: 'black',
                 color: '#ccc',
                height: 150,
                justifyContent: 'center',
              }}>
            <Image style={{height:150,width:400}} source={require('./assets/dark.jpg')}/>
            </View>
            {this.state.history.map((history, index) => (
              <View style={{flex: 1}} key={index}>
                <View style={{height: 200}}>
                  <View
                    style={{
                      top: 20,
                      height: 185,
                      width: 200,
                      borderRadius: 15,

                      flexDirection: 'row',
                      marginHorizontal: 40,
                    }}>
                    <Image
                      style={{height: 130, width: 90, borderRadius: 15}}
                      source={{uri: history.image_url}}
                    />
                    <View
                      style={{top: 20, paddingLeft: 10, alignItems: 'center'}}>
                      <Text style={{fontSize: 18,color:'white'}}>
                        {this.dateFormat(history.borrow_at)}
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: 'bold',
                          alignItems: 'center',color:'white'
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
      </View>
    );
  }
}

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
