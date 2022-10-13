/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

    fetch('http://127.0.0.1:3000/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));
