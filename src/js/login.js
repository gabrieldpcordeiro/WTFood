"use strict";
console.log("Login");

import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../database.js";

const signUp = document.getElementById("signUp");
const signIn = document.getElementById("signIn");
const signOut = document.getElementById("signOut");

//--------------------------Sign Up--------------------------//
signUp.addEventListener("click", () => {
  let email = document.getElementById("email1").value;
  let password = document.getElementById("password1").value;

  console.log(email + " " + password);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("User created!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
});

//--------------------------Sign In--------------------------//

signIn.addEventListener("click", () => {
  let email = document.getElementById("email1").value;
  let password = document.getElementById("password1").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      alert("User Sign in");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
});

//--------------------------Sign Out--------------------------//

signOut.addEventListener("click", () => {});
