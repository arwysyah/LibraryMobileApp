import React,{Component} from 'react'
import {View,TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default class Search extends Component{
    render(){
        return(
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
             </View>
            </View>
        )
    }
}