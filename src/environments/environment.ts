// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAFnI3r0DDBM7cf3HyrAvX_2Nl_KVYtbjY",
    authDomain: "grocery-list-ed903.firebaseapp.com",
    databaseURL: "https://grocery-list-ed903.firebaseio.com",
    projectId: "grocery-list-ed903",
    storageBucket: "grocery-list-ed903.appspot.com",
    messagingSenderId: "644276968142"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
