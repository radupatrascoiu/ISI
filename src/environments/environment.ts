/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  firebase: {
    // add your Firebase config here
      apiKey: "AIzaSyCvt_3XeUekYfLxHmA50BNOWdyfYC47faw",
      authDomain: "lab5isi-fdc84.firebaseapp.com",
      databaseURL: "https://lab5isi-fdc84-default-rtdb.europe-west1.firebasedatabase.app/",
      projectId: "lab5isi-fdc84",
      storageBucket: "lab5isi-fdc84.appspot.com",
      messagingSenderId: "56703062014",
      appId: "1:56703062014:web:dcc2d8a3eecb597587baaf",
      measurementId: "G-NHBZNWJ0MT"
  },
  production: false,
};
