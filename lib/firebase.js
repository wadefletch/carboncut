import 'firebase/analytics';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/performance';
import 'firebase/storage';

// These look like they should be secured, but that's not needed
const firebaseConfig = {
  apiKey: 'AIzaSyDnBQM5-o6oU5iuwUq3Y14ppJUiPj_BY64',
  authDomain: 'carbon-cut.firebaseapp.com',
  projectId: 'carbon-cut',
  storageBucket: 'carbon-cut.appspot.com',
  messagingSenderId: '864789444251',
  appId: '1:864789444251:web:ec1c93b6410752ac16b83e',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const perf = firebase.performance();
export const analytics = firebase.analytics();
export const functions = firebase.functions();
export const storage = firebase.storage();
