/**
 * @format
 */
import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// ignore specific logbox warnings
LogBox.ignoreLogs([
  'Setting a timer',
  'Require cycle:',
  'componentWillReceiveProps has been renamed',
  'componentWillMount has been renamed',
  'Remote debugger',
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: Each child in an array or iterator should have a unique',
  'Remote debugger is in a background tab',
]);

AppRegistry.registerComponent(appName, () => App);
