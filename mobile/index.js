/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

if (__DEV__) {
  import('./src/config/ReactotronConfig').then(() =>
    // eslint-disable-next-line no-console
    console.log('Reactotron Configured')
  );
}
