export default {
    authenticate: (Auth, $q) => {
        if (Auth.isLogin())
            return true;
        else{
            return $q.reject('not authorized');
        }
    }
}