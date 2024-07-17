import { createApp } from 'vue'
import App from './App.vue'
import { firebaseConfig } from './firebaseConfig';
import firebase from 'firebase/app';
import 'firebase/database';


firebase.initializeApp(firebaseConfig);

createApp(App).mount('#app')
