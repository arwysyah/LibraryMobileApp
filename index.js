/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './Components/Login';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed','Warning:Possible'];