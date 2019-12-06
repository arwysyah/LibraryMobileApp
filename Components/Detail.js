import React, {Component} from 'react';
import {Icon, Button} from 'native-base';
import {
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import decode from 'jwt-decode';
import Axios from 'axios';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_user: '',
      status:'',
      handleWishlist:true,
      disabled:true
    };
  }

  async getToken() {
    try {
      const token = await AsyncStorage.getItem('userToken');
      this.setState({
        userToken: token,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    this.setState({
      userId: this.props.navigation.getParam('userId'),
      detail: this.props.navigation.getParam('data'),
      isLoading: false,
disabled:false
      
    });
    // this.state.
    // await this.getToken()
    // await this.checkBorrowed()
  }
  handleWishlist() {
    Alert.alert('Confirm Borrow', 'Are You sure want to Wishlist this novel?', [
      {
        text: 'Cancel',
        onPress: () => console.log('cancel'),
        style: 'cancel',
      },
      {
        text: 'Confirm',
        onPress: async () => {
          try {
            const userToken = await AsyncStorage.getItem('jwt');
            const user = await decode(userToken);
            const userId = user.result.id;
            console.log('user id', user.result.id);
            // console.log('resu',user.result) //ini penting
            const detail = this.props.navigation.getParam('book');
            const idBook = detail.id;
            // console.log('data',data.id,idBook) //navigator
            let formData = {
              id_user: userId,
              id_book: idBook,
            };
            console.log('tipe', typeof formData);
            await Axios.post('http://192.168.100.155:9000/wishlist', formData);
            console.log('succes');
            ToastAndroid.show('Succes Wishlist', ToastAndroid.SHORT);
            // await this.props.dispatch(addBorrow(userId, userToken, formData))
            // this.checkBorrowed()
          } catch (error) {
            console.log('error', error);
          }
        },
        style: 'default',
      },
    ]);
  }

  handleBorrow() {
    Alert.alert('Confirm Borrow', 'Are You sure want to Borrow this Book?', [
      {
        text: 'Cancel',
        onPress: () => console.log('cancel'),
        style: 'cancel',
      },
      {
        text: 'Confirm',
        onPress: async () => {
          try {
            const userToken = await AsyncStorage.getItem('jwt');
            const user = await decode(userToken);
            const userId = user.result.id;

            // console.log('resu',user.result) //ini penting
            const detail = this.props.navigation.getParam('book');
            const idBook = detail.id;
            const status = detail.status;
            // console.log(status, 'status');
            // console.log('data',data.id,idBook) //navigator
            let formData = {
              id_user: userId,
              id_book: idBook,
            };
            let updateStatus = {
              status: 2,
              id_user: userId,
            };
            // console.log('id_user', userId);
            // console.log('id BOOKs', idBook);
            await Axios.post(
              'http://192.168.100.155:9000/borrow',
              formData,
            ).then(() => {
              Axios.put(
                `http://192.168.100.155:9000/book/${idBook}`,
                updateStatus,
              );
            });
            console.log('updateStatus');
            ToastAndroid.show('Succes Borrow', ToastAndroid.SHORT);
            // await this.props.dispatch(addBorrow(userId, userToken, formData))
            // this.checkBorrowed()
          } catch (error) {
            console.log('error', error);
          }
        },
        style: 'default',
      },
    ]);
  }
  handleReturn() {
    Alert.alert('Confirm Return', 'Are You sure want to Return this Book?', [
      {
        text: 'Cancel',
        onPress: () => console.log('cancel'),
        style: 'cancel',
      },
      {
        text: 'Confirm',
        onPress: async () => {
          try {
            const userToken = await AsyncStorage.getItem('jwt');
            const user = await decode(userToken);
            const userId = user.result.id;

            // console.log('resu',user.result) //ini penting
            const detail = this.props.navigation.getParam('book');
            const idBook = detail.id;
            const status = detail.status;
            console.log(status, 'status');
            // console.log('data',data.id,idBook) //navigator
            let formData = {
              id_user: userId,
              id_book: idBook,
            };
            let updateStatus = {
              status: 1,
              id_user: userId,
            };
            console.log('id_user', userId);
            console.log('id BOOKs', idBook);
            await Axios.post(
              'http://192.168.100.155:9000/borrow',
              formData,
            ).then(() => {
              Axios.put(
                `http://192.168.100.155:9000/book/${idBook}`,
                updateStatus,
              );
            });
            console.log('updateStatus');
            ToastAndroid.show('Succes Return', ToastAndroid.SHORT);
            // await this.props.dispatch(addBorrow(userId, userToken, formData))
            // this.checkBorrowed()
          } catch (error) {
            console.log('error', error);
          }
        },
        style: 'default',
      },
    ]);
  }
  //  .then(() =>

  // swal("Thank You for Using Our Services!", {
  //     icon: "success"
  //   })
  // )
  // .then(()=>{window.location.href="/"

  // })

  render() {
    console.log('update status')
    console.log('ini params', this.props.navigation.getParam('book'));
    const detail = this.props.navigation.getParam('book');
    console.log('ID BOOK', detail.id);
    // const {
    //   author,image,tittle,description
    // }= this.state.bookData
    console.log(detail.status,"status")
    return (
      
      <View>
<ScrollView>
      <View style={{backgroundColor:'black'}}>
      <Button
        transparent
        onPress={() => {
          this.props.navigation.goBack();
        }}>
        <Icon style={{color: 'white'}} name="arrow-back" />
        <Text
          style={{
            color: 'white',
            fontSize: 23,
            alignContent: 'center',
            left: -140,
            fontWeight: 'bold',
          }}>
          Sinopsis
        </Text>
      </Button>
    </View>
   
      <View style={{backgroundColor: 'black',
      color: '#ccc'}}>
       
          <View style={{height: 280, backgroundColor: 'transparent'}}>
            <View style={{height: 280, borderRadius: 30}}>
              <Image
                source={{
                  uri: detail.image_url,
                }}
                style={{height: 250, width: 360}}
              />
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  top: -130,
                  color: 'white',
                  marginHorizontal: 20,
                }}>
                {detail.tittle}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  top: -110,
                  color: 'white',
                  marginHorizontal: 20,
                }}>
                {detail.author}
              </Text>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: 'bold',
                  top: -45,
                  color: 'green',
                  marginHorizontal: 20,
                }}>
                {detail.status}
              </Text>
            </View>
            <Image
              source={{
                uri: detail.image_url,
              }}
              style={{
                height: 150,
                width: 110,
                left: 231,
                top: -150,
                borderRadius: 10,
                shadowOffset: {width: 10, height: 10},
                shadowColor: 'black',
                shadowOpacity: 1.0,
              }}
            />
            <View
              style={{
                backgroundColor: 'green',
              }}></View>
          </View>
          <View style={{marginHorizontal: 27, top: 10}}>
            <Text style={{fontSize: 15,color:'white'}}>{detail.description}</Text>
          </View>
          <View
            style={{
              height: 80,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginHorizontal: 22,
            }}>
              <View>
                {detail.status == 'Available' ? 
           
           <TouchableOpacity
           onPress={this.handleBorrow.bind(this)}
           style={styles.button}
         
         >
           <Text style={{fontSize: 18}}> Borrow</Text>
         </TouchableOpacity>
           

                  :
           
         
            <TouchableOpacity
            onPress={this.handleReturn.bind(this)}
            style={styles.button}
            
          >
            <Text style={{fontSize: 18}}> Return</Text>
          </TouchableOpacity>
  }
            </View>
            <TouchableOpacity
            ctiveOpacity={this.state.disabled ? 1 : 0.7}
              onPress={this.handleWishlist.bind(this)}
              style={styles.button1}
              //  onPress={this.onPress}
            >
              
                <Text style={{fontSize: 18}}> Wishlist</Text>
     
            </TouchableOpacity>
          </View>
       
      </View>
      </ScrollView>
      </View>
    
    );
  }
}
export default Detail;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center', 
    textAlign: 'center',
    justifyContent: 'center',
    height: 35,
    width: 100,
    // shadowColor:'black',
    backgroundColor: 'white',
    borderRadius: 15,
    // shadowOpacity:100,
    borderTopColor: 'black',
    fontWeight:'bold'
  },
  button1: {
    alignItems: 'center',
    color:'white',
    textAlign: 'center',
    justifyContent: 'center',
    height: 35,
    width: 100,
   
    paddingLeft: 10,
    // shadowColor:'black',
    backgroundColor: 'white',
    borderRadius: 15,
    // shadowOpacity:100,
    borderTopColor: 'black',
    // shadowOffset:30
  },
});
