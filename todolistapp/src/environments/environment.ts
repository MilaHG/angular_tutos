// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// Initialize Firebase
  export const environment = { production: false, firebase: {
    apiKey: 'AIzaSyAIGEvKKnlQ_lkwXXcxihG4ylQU2h9gl1I',
    authDomain: 'todolistapp-7ef24.firebaseapp.com',
    databaseURL: 'https://todolistapp-7ef24.firebaseio.com',
    projectId: 'todolistapp-7ef24',
    storageBucket: 'todolistapp-7ef24.appspot.com',
    messagingSenderId: '736209641923'
  }
  // firebase.initializeApp(config),
  };
