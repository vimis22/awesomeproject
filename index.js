/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
    // (Obligatorisk) Callback når du modtager en token
    onRegister: function (token) {
        console.log('TOKEN:', token);
    },

    // (Obligatorisk) Callback når en notifikation trigges
    onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
        // process the notification
    },

    // Android-only: Giver en channel til notifikationer
    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios',
});

AppRegistry.registerComponent(appName, () => App);
