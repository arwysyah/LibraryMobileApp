import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './Redux/store';
import Register from './Components/Register';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

import Home from './Components/Home.js';
import Detail from './Components/Detail';
import {createStackNavigator} from 'react-navigation-stack';
import History from './Components/History'
import Login from './Components/Login';
import UserProfile from './Components/UserProfile'
import {Icon} from 'native-base';
import SplashScreen from './Components/splashscreen'
import Wishlist from './Components/Wishlist'
// const AppNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: Home,
//       navigationOptions: () => ({
//         header: null,
//       }),
//     },
//     Detail: {
//       screen: Detail,
//       navigationOptions: {
//         title: 'Detail',
//         headerStyle: {
//           transparent: true,
//         },
//         headerTitleStyle: {
//           fontWeight: 'bold',
//           color: '#000',
//         },
//       },
//     },UserUserProfile: {
//       screen: UserUserProfile,
//       navigationOptions: {
//         title: 'UserUserProfile',
//         headerStyle: {
//           transparent: true,
//         },
//         headerTitleStyle: {
//           fontWeight: 'bold',
//           color: '#000',
//         },
//       },
//     },
//   })

// const BottomNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: AppNavigator,
//       navigationOptions: {
//         tabBarLabel: 'Explore',
//         tabBarIcon: ({tintColor}) => (
//           <Icon
//             type="FontAwesome"
//             name="paper-plane-o"
//             style={{color: tintColor, fontSize: 23}}
//           />
//         ),
//       },
//     },
//     // History: {
//     //   screen: History,
//     //   navigationOptions: {
//     //     tabBarIcon: ({tintColor}) => (
//     //       <Icon
//     //         type="FontAwesome"
//     //         name="clock-o"
//     //         style={{color: tintColor, fontSize: 23}}
//     //       />
//     //     ),
//     //     title: 'History',
//     //     headerStyle: {
//     //       transparent: true,
//     //     },
//     //     headerTitleStyle: {
//     //       fontWeight: 'bold',
//     //       color: '#000',
//     //     },
//     //   },
//     // },
//     UserUserProfile: {
//       screen: UserUserProfile,
//       navigationOptions: {
//         tabBarIcon: ({tintColor}) => (
//           <Icon
//             type="FontAwesome"
//             name="user-o"
//             style={{color: tintColor, fontSize: 23}}
//           />
//         ),
//         title: 'UserUserProfile',
//         headerStyle: {
//           transparent: true,
//         },
//         headerTitleStyle: {
//           fontWeight: 'bold',
//           color: '#000',
//         },
//       },
//     },
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: 'black',
//       inactiveTintColor: 'grey',
//       style: {
//         backgroundColor: 'white',
//         borderTopWidth: 0,
//         shadowOffset: {width: 5, height: 3},
//         shadowColor: 'black',
//         shadowOpacity: 0.5,
//         elevation: 5,
//       },
//     },
//   },
// );


// const SwitchScreen = createSwitchNavigator({
//   // Splash: SplashScreen,
//   // AuthScreen: UserNavigator,
//   App: BottomNavigator,
  
// });

//  createAppContainer(SwitchScreen);



// import React from 'react';
// import {createStackNavigator} from 'react-navigation-stack';
// import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import Home from './Src/Components/Home';
// import Detail from './Src/Components/Detail';
// import Login from './Src/Components/Login';
// import History from './Src/Components/History';
// import UserProfile from './Src/Components/UserProfile';
// import Register from './Src/Components/Register';
// import {createBottomTabNavigator} from 'react-navigation-tabs';

// import SplashScreen from './Src/Components/Splash';

const UserNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Register: {
    screen: Register,
    navigationOptions: () => ({
      header: null,
    }),
  },
});
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        title: 'Detail',
        headerStyle: {
          transparent: true,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#000',
        },
      },
    },
  
    UserProfile: {
      screen: UserProfile,
      navigationOptions: {
        title: 'UserProfile',
        headerStyle: {
          transparent: true,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#000',
        },
      },
    },
  },

  // Detail: {
  //   screen: Detail,
  //   navigationOptions: {
  //     title: 'Detail',
  //     headerStyle: {
  //       backgroundColor: '#cecece',
  //     },
  //   },
  // },
  // Form: {
  //   screen: Form,
  // },
);
const BottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: AppNavigator,
      navigationOptions: {
        tabBarLabel: 'Explore',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="FontAwesome"
            name="home"
            style={{color: tintColor, fontSize: 23}}
          />
        ),
      },
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="FontAwesome"
            name="history"
            style={{color: tintColor, fontSize: 23}}
          />
        ),
        },
      },
      Wishlist: {
          screen: Wishlist,
          navigationOptions: {
            tabBarIcon: ({tintColor}) => (
              <Icon
                type="FontAwesome"
                name="list"
                style={{color: tintColor, fontSize: 23}}
              />
            ),
        title: 'Wishlist',
        headerStyle: {
          transparent: true,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#000',
        },
      },
    },
    UserProfile: {
      screen: UserProfile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="FontAwesome"
            name="user-secret"
            style={{color: tintColor, fontSize: 23}}
          />
        ),
        title: 'UserProfile',
        headerStyle: {
          transparent: true,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#000',
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: {width: 5, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
      },
    },
  },
);

const switchScreen = createSwitchNavigator({
  Splash: SplashScreen,
  AuthScreen: UserNavigator,
  App: BottomNavigator,
});

const SwitchScreen =  createAppContainer(switchScreen);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SwitchScreen />
      </Provider>
    );
  }
}
export default App;






