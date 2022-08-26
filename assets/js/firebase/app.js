  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBUXVEinHN_yGmgklkXj5KHjSymmflVg_o",
    authDomain: "projeto-mundo-invertido-d78b6.firebaseapp.com",
    projectId: "projeto-mundo-invertido-d78b6",
    storageBucket: "projeto-mundo-invertido-d78b6.appspot.com",
    messagingSenderId: "926269304790",
    appId: "1:926269304790:web:b4e9fa8fb730fb7f3a3e77"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export default app