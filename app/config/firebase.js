import * as firebase from "firebase";

export default () => {
    firebase.initializeApp({
        apiKey: "AIzaSyBd19Ugsh6KhQlaPxYSXIpkNP3m66JQ_Sc",
        authDomain: "test-177e4.firebaseapp.com",
        databaseURL: "https://test-177e4.firebaseio.com",
        storageBucket: "test-177e4.appspot.com",
        messagingSenderId: "389032750097"
    });

    return firebase;
};