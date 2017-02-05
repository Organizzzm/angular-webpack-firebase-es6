class Auth {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    isLogin(){
        return false;
    }

    getUser(usreId) {
        return false;
        // return this.$http.get('http://jsonplaceholder.typicode.com/users/' + usreId);
    }
}

export default Auth;