import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './Redux/store';
import Register from './Components/Register';

import {createAppContainer} from 'react-navigation';

import Home from './Components/Home.js';
import Detail from './Components/Detail';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './Components/Login';
import UserProfile from './Components/UserProfile';

// export const AppNavigator = createStackNavigator({
//   Login: {
//     screen: Login,
//     navigationOptions: {
//       title: 'Login',
//       headerStyle: {
//         backgroundColor: 'white',
//       },
//     },
//   },
//   Register: {
//     screen: Register,
//     navigationOptions: {
//       title: 'Register',
//       headerStyle: {
//         backgroundColor: 'white',
//       },
//     },
//   },
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       title: 'Home',
//       header: null,
//     },
//   },
//   Detail: {
//     screen: Detail,
//     navigationOptions: {
//       title: 'Detail',
//       headerStyle: {
//         backgroundColor: 'white',
//       },
//     },
//   },
// });

// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <AppContainer />
//       </Provider>
//     );
//   }
// }
// export default App;

export const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
  render(){
    return(
  <Provider store={store}>
    <UserProfile />
  {/* <Detail /> */}
    {/* <Home /> */}
  {/* <Login/> */}
  {/* <History /> */}

  </Provider>

)
  }

}
