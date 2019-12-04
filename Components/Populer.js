import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class Popular extends Component {
  // state={
  //   bookData:this.props.navigation.navigator.getparams('bookData')
  // }
  render() {
    console.log('ini params',this.props.navigation.getParam('book'))
    const detail=this.props.navigation.getParam('book')
    // const {
    //   author,image,tittle,description
    // }= this.state.bookData
    return (
      <View>
        <ScrollView>
          <View style={{height: 280,backgroundColor:'transparent'}}>
            <View style={{height: 280, borderRadius: 30}}>
               
              <Image
                source={{
                  uri:
                    detail.image_url,
                }}
                style={{height: 250, width: 360 }}
              />
              <Text style={{fontSize:22,fontWeight:'bold',top:-130,color:'white',marginHorizontal:20}}>{detail.tittle}</Text>
              <Text style={{fontSize:17,fontWeight:'bold',top:-110,color:'white',marginHorizontal:20}}>{detail.author}</Text>
            </View>
            <Image
              source={{
                uri:
                  detail.image_url
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
          <View style={{marginHorizontal: 27,top:10}}>
            <Text style={{fontSize:15}}> 
       {detail.description}
            </Text>
          </View>
          <View
            style={{
              height: 80,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={styles.button}
              //  onPress={this.onPress}
            >
              <Text style={{fontSize:18}}> Borrow</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Popular;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',

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
