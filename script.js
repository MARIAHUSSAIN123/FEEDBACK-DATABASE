import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
 const firebaseConfig = {
    apiKey: "AIzaSyCTSFBNTJJCijfSf3IPujjE0OyeDI4NG90",
    authDomain: "auth-373e7.firebaseapp.com",
    databaseURL: "https://auth-373e7-default-rtdb.firebaseio.com",
    projectId: "auth-373e7",
    storageBucket: "auth-373e7.firebasestorage.app",
    messagingSenderId: "682820014881",
    appId: "1:682820014881:web:146a8e63e6c2a73c136460",
    measurementId: "G-VPTVRWY4ET"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit', (e) => {
e.preventDefault(); 
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const rating = document.getElementById('rating').value;
const message = document.getElementById('message').value;
push(ref(database, 'feedback'), { name, email, rating, message })
.then(() => {
alert("Thank you for your feedback!");

feedbackForm.reset();
})
.catch((error) => {

alert("Error submitting feedback: " + error.message);
});
});
