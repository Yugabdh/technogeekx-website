import firebase from 'firebase';
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAa3tCoave4mrU4LKcnwSyHajiAOv718m8",
  authDomain: "technogeekx-web.firebaseapp.com",
  databaseURL: "https://technogeekx-web.firebaseio.com",
  projectId: "technogeekx-web",
  storageBucket: "technogeekx-web.appspot.com",
  messagingSenderId: "54985186565",
  appId: "1:54985186565:web:aaba7e671fdeb12a2c6b6c",
  measurementId: "G-7PKF58P91K"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;