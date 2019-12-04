import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icona from 'react-native-vector-icons/Entypo';
import {getBook} from '../Redux/Actions/book';
import {connect} from 'react-redux';

import {Badge} from 'native-base';
import { TouchableOpacity } from 'react-native';
import Iconza from 'react-native-vector-icons/MaterialCommunityIcons';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      bookData: [],
    };
  }
  async componentDidMount() {
   
    try {
      await this.props.dispatch(getBook());
      // console.log(this.props.data.bookData);
      this.setState({
        bookData: this.props.data.bookData,
     
      });
    } catch (error) {
      // console.log(error);
    }
  }
  
  render() {
    // const bookData = console.log(this.props.navigation.navigate('id'))
    
    
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: 55,
            flexDirection: 'row',
          }}>
          <View>
            <View>
              <TextInput
                placeholder="search"
                style={{
                  top: 23,
                  backgroundColor: '#E5E6EE',
                  borderWidth: 1,
                  borderRadius: 15,
                  width: 194,
                  height: 30,
                  paddingLeft: 53,
                  paddingRight: 20,
                  left: 140,
                }}
              />

              <Icon
                name={'ios-search'}
                size={20}
                color={'black'}
                style={{position: 'absolute', left: 155, top: 28}}
              />
            
              <Text
                style={{left: 20,fontWeight:'bold', fontSize: 14, fontFamily: 'Airbnb Cerl App'}}>
                LIBRARY APP  <Iconza  name={'library'} size={30} style={{top:32}}/>
              </Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View>
            <View style={{top: 37}}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                {/* -----------genre mapp dari sini------------ */}
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 5,
                    paddingRight: 6,
                    flex: 1,
                    borderRadius: 15,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#e34a12',
                      shadowColor: 13,
                      borderRadius: 15,
                      height: 116,
                      width: 216,
                      flex: 1,
                      flexDirection: 'row',
                    }}>
                    <View>
                      <Image
                        source={require('./assets/actions.jpg')}
                        style={{
                          height: 116,
                          width: 216,

                          borderRadius: 15,
                        }}
                      />
                    </View>
                    <Text
                      style={{
                        borderRadius: 15,
                        width: 100,
                        fontSize: 20,
                        backgroundColor: '#d9d5d4',
                        position: 'absolute',
                        left: 58,
                        top: 80,
                        textAlign: 'center',
                      }}>
                      {' '}
                      Action
                    </Text>
                  </View>
                </View>
                  <View
                    style={{
                      backgroundColor: '#e34a12',
                      shadowColor: 13,
                      borderRadius: 15,
                      height: 116,
                      width: 216,
                      flex: 1,
                      flexDirection: 'row',
                    }}>
                    <View>
                      <Image
                        source={require('./assets/drama.jpg')}
                        style={{
                          height: 116,
                          width: 216,

                          borderRadius: 15,
                        }}
                      />
                    </View>
                    <Text
                      style={{
                        borderRadius: 15,
                        width: 100,
                        fontSize: 20,
                        backgroundColor: '#d9d5d4',
                        position: 'absolute',
                        left: 58,
                        top: 80,
                        textAlign: 'center',
                      }}>
                      {' '}
                      Drama
                    </Text>
                  </View>
                


                {/* -----------genre mapp sampai sini------------ */}

              </ScrollView>
              
              <View style={{marginLeft: 7, top: 41, height: 40, width: 171}}>
                <Text style={{fontSize: 18}}>Popular Books</Text>
              </View>

              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                {this.state.bookData.map((book, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        top: 30,
                        height: 260,
                        width: 124,

                        marginRight: 10,
                      }}>
                      <View style={{elevation: 8}}>
                        <Image
                          style={{height: 175, width: 124, borderRadius: 12}}
                          source={{
                            uri: book.image_url,
                          }}
                        />
                      </View>
                      <Text style={{textAlign: 'center', color: 'grey'}}>
                        {book.author}
                      </Text>
                      <Text style={{textAlign: 'center', fontSize: 20}}>
                        {book.tittle}
                      </Text>
                    </View>
                  );
                })}
              </ScrollView>
              <View style={{marginLeft: 35, top: 41, height: 40, width: 171}}>
                <Text style={{fontSize: 18}}>List Books</Text>
              </View>
            </View>
            {this.state.bookData.map((book, index) => {
              return (
                <View
                key={index}
                  style={{
                    marginTop: 70,
                    marginHorizontal: 27,
                    
                    marginRight: 20,
                    flexDirection: 'row',
                  }}>
                  <View>
                  <TouchableOpacity onPress={(id) => {
                    // console.log('object',book.id)
                    
                    this.props.navigation.navigate('Detail',{book:{...book}})}}
                    
                    style={{
                      height: 185, width: 124, borderRadius: 15
                    }}
                    >
                    <Image
                      style={{height: 185, width: 124, borderRadius: 15}}
                      source={{
                        uri: book.image_url,
                      }}
                      />
                      </TouchableOpacity>
                  </View>
                  <View
                    style={{top: 40, paddingLeft: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 18}}> {book.tittle}</Text>
                    <Text
                      style={{
                        fontSize: 15,
                        alignItems: 'center',
                        color: 'grey',
                      }}>
                      {book.author}
                    </Text>
                    <Badge
                      style={{
                        height: 19,
                        top: 5,
                        backgroundColor: '#7af549',
                        width: 120,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{fontSize: 17}}> {book.status}</Text>
                    </Badge>
                    <Badge
                      style={{
                        height: 18,
                        top: 10,
                        backgroundColor: '#d9eb1a',
                        width: 120,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{fontSize: 17}}> {book.genre}</Text>
                    </Badge>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
    
        <View
          style={{height: 54, backgroundColor: 'white', flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name={'ios-home'} size={28} color={'black'} />

            <Text>Home</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name={'ios-clock'} size={28} color={'black'} />

            <Text> History</Text>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icona name={'user'} size={28} color={'black'} />

            <Text> Profile </Text>
          </View>
        </View>
      </View>
    );
  }
}

// const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    data: state.getBooks,
  };
};
export default connect(mapStateToProps)(Home);
