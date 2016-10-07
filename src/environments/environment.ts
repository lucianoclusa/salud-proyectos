// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

import { AngularFireModule,AuthProviders,AuthMethods } from 'angularfire2';

export const environment = {
  production: false
};

export const myFirebaseConfig = {
    apiKey: "AIzaSyC9neaEJLnbnu0l6O5FUIdq5f3MdaZs-eY",
    authDomain: "saludproyectos-389bc.firebaseapp.com",
    databaseURL: "https://saludproyectos-389bc.firebaseio.com",
    storageBucket: "saludproyectos-389bc.appspot.com",
    messagingSenderId: "594271196682"
}

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}