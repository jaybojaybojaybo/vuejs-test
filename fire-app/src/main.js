// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from './env/firebaseConfig'

Vue.use(VueFire)
const settings = firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  databaseURL: firebaseConfig.databaseURL,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId
})

export const db = firebase.firestore(settings)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})