// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from 'firebase';
import database = firebase.database;

export const environment = {
  production: false,
};
export const firebaseConfig = {
  apiKey: 'AIzaSyAFK55BWDUrkEXKEjaBbTbYxJhqVqbWNIE',
  authDomain: 'expenselogger-f68ec.firebaseapp.com',
  databaseURL: 'expenselogger-f68ec-default-rtdb.firebaseio.com',
  projectId: 'expenselogger-f68ec',
  storageBucket: 'expenselogger-f68ec.appspot.com',
  messagingSenderId: 'G-M8DNY7R5QJ'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
