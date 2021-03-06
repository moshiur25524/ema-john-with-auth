/*
1. Create a new firebase project in console.firebase.google.com
2. npm install firebase
3. Create firebase.init.js and import getAuth to export auth
4. Firebase settings > Authentication > enable Email and password auth
5. Create SignUp , LogIn component , setup Route
6. Attach form field handler and form submit handler
7. npm install --save react-firebase-hooks
8. useCreateUserWithEmailAndPassword(auth) from react firebase hooks
9. If user is created redirect to the expected page
10. useSignInWithEmailAndPassword(auth) for sign in
11. Create RequireAuth component ==> check user exists also track user location
12. In Route.. . wrap protected component by using RequireAuth component
*/


/*
Firebase hosting steps

1. npm install -g firebase-tools
2. firebase login
3. firebase init
4. firebase deploy
*/