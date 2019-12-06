import React,{Component} from 'react'
import {View, Text,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icona from 'react-native-vector-icons/Entypo';

class Navbar extends Component {
    render(){
        return(
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
                  <TouchableOpacity onPress={this.props.changePage}>
                <Icona name={'user'} size={28} color={'black'} />
    
                <Text> Profile </Text>
                </TouchableOpacity>
              </View>
            </View>
        
        )
    }
}
    
  


export default Navbar