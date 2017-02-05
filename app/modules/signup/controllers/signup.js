export default class SignUpController {
    constructor() {
        this.author = 'Yang Zhao';
    }
    send(e){
        console.log(e);
        return false;
    }
}

SignUpController.$inject = [];