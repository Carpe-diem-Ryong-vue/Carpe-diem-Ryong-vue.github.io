import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOuKEqQQhp40fCf4x2Psh6f2xkb_LlM48",
  authDomain: "github-vue-bac3c.firebaseapp.com",
  projectId: "github-vue-bac3c",
  storageBucket: "github-vue-bac3c.appspot.com",
  messagingSenderId: "144341716871",
  appId: "1:144341716871:web:4bf0ee5a269212a5534d22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
