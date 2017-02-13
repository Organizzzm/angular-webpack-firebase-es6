class Auth {
    constructor(firebase) {
        "ngInject";

        this.firebase = firebase;
    }

    login(data) {
        return this.firebase.auth().signInWithEmailAndPassword(data.login, data.password);
    }
}

export default Auth;