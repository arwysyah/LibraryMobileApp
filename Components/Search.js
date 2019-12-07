// import React,{Component} from 'react'
// import {View,TextInput} from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons';

// export default class Search extends Component{
//     render(){
//         return(
//             <View>
//                  <View>
//               <TextInput
//                 placeholder="search"
//                 style={{
//                   top: 23,
//                   backgroundColor: '#E5E6EE',
//                   borderWidth: 1,
//                   borderRadius: 15,
//                   width: 194,
//                   height: 30,
//                   paddingLeft: 53,
//                   paddingRight: 20,
//                   left: 140,
//                 }}
//               />

//               <Icon
//                 name={'ios-search'}
//                 size={20}
//                 color={'black'}
//                 style={{position: 'absolute', left: 155, top: 28}}
//               />
//              </View>
//             </View>
//         )
//     }
// }
import React, {Component} from 'react';
import {Image} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {
  Container,
  Header,
  Card,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  View,
  Title,
  Item,
  Badge,
} from 'native-base';
import axios from 'axios';
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSearch: [],
      valueSearch: '',
    };
  }

  onSearch() {
    const title_book = this.state.valueSearch;
    axios
      .get(
        `http://mybookcollections.herokuapp.com/book/filter/books/search/${title_book}`,
      )
      .then(response => {
        this.setState({
          dataSearch: response.data.response,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={{backgroundColor:'black',flex:1}}>
      <Container style={{backgroundColor:'black'}}>
        <Header style={{backgroundColor: 'black'}}>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Icon style={{color: 'white'}} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{color: 'white'}}>Search</Title>
          </Body>
          <Right>
            <Body>
              <Item
                rounded
                style={{
                  height: 30,
                  width: 210,
                  backgroundColor: '#e5dfdf',
                  left:-10
                }}>
                <TextInput
                  placeholder="Search..."
                  onChangeText={TextInputValue =>
                    this.setState({valueSearch: TextInputValue})
                  }
                />
                {/* placeholderTextColor="white" */}
              </Item>
            </Body>
            <Button
              onPress={() => this.onSearch()}
              transparent
              style={{marginRight: 10}}>
              <Icon style={{color: 'black'}} name="search" />
            </Button>
            {/* <Button transparent><Icon name="heart" /></Button><Button transparent><Icon name="more" /></Button> */}
          </Right>
        </Header>
        <ScrollView style={{backgroundColor:'black'}}>
          <View style={{backgroundColor:'black'}}>
            <View style={{alignItems: 'center',backgroundColor:'black'}}>
              <Text>Search Result</Text>
            </View>
            {this.state.dataSearch.length > 0 ? (
              <View style={{backgroundColor:'black'}}>
                {this.state.dataSearch.map((data, index) => {
                  return (
                    <Card key={index}>
                      <View
                        style={{
                          paddingLeft: 30,
                          flexDirection: 'row',
                          backgroundColor:"black"
                        }}>
                        {/* <Text>1</Text> */}
                        <Card transparent width={85} height={130}style={{backgroundColor:'black'}}>
                          <Image
                            borderRadius={5}
                            source={{
                              uri: data.image_url,
                            }}
                            style={{
                              height: 200,
                              width: '100%',
                              flex: 1,
                            }}
                          />
                        </Card>
                        <View
                          style={{
                            top: 15,
                           paddingLeft:10
                          }}>
                          <Text style={{color: 'white', fontSize: 16}}>
                            {data.tittle}
                          </Text>
                          <Text
                            numberOfLines={1}
                            style={{width: 180, fontWeight: 'bold',color:'grey',fontSize:12}}>
                            {data.author}
                          </Text>
                         
                          <Badge
                            style={{height: 20, justifyContent: 'center'}}
                            info>
                            <Text>{data.genre}</Text>
                          </Badge>
                          <Badge
                            style={{
                              justifyContent: 'center',
                              height: 20,
                              marginTop: 5,
                              backgroundColor:
                                data.status === 'Available' ? 'green' : 'red',
                            }}>
                            <Text>{data.status}</Text>
                          </Badge>
                        </View>
                        {/* <View></View> */}
                      </View>
                    </Card>
                  );
                })}
              </View>
            ) : (
              <View
                style={{
                  marginTop: '40%',backgroundColor:'black'
                }}>
                <View style={{backgroundColor:'black'}}>
                  <Text style={{textAlign: 'center'}}>Search Empty</Text>
                </View>
                <View style={{alignItems: 'center', marginTop: 10,backgroundColor:'black'}}>
               
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </Container>
      </View>
    );
  }
}