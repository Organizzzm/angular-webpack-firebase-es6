class Auth {
    constructor(firebase) {
        this.firebase = firebase;
    }

    login(data) {
        return this.firebase.auth().signInWithEmailAndPassword(data.login, data.password);
    }
}

export default Auth;