class SignUpController {
    constructor($scope, $state, Auth) {
        this.auth = Auth;
        this.$scope = $scope;
        this.$state = $state;
    }

    send(data, form) {
        this.auth.login(data).then(()=> {
            this.$state.go('list');
        }, (res) => {
            if(res.code == 'auth/invalid-email'){
                form.login.$setValidity('email', false);
            }
            if(res.code == 'auth/wrong-password'){
                form.pass.$setValidity('required', false);
            }
            if(res.code == 'auth/too-many-requests'){
                form.pass.$setValidity('required', false);
            }

            this.$scope.$apply();
        });
    }
}

export default SignUpController;