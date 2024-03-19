/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import playbackService from './Lab4/playbackService';

AppRegistry.registerComponent(appName, () => App);

TrackPlayer.registerPlaybackService(()=>playbackService);

