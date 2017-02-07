class SignUpController {
    constructor($window, $state, Auth) {
        this.auth = Auth;
        this.$window = $window;
        this.$state = $state;
    }

    send(data) {
        this.auth.login(data).then(()=> {
            this.$state.go('list');
        }, (res) => {

        });
    }
}

export default SignUpController;