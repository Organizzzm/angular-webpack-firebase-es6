class tableService {
    constructor($q, firebase) {
        this.firebase = firebase;
        this.$q = $q;
    }

    save(data) {
        const deferred = this.$q.defer();

        var messageListRef = this.firebase.database().ref('personal/');
        messageListRef.push({
            'name': data.name,
            'lastName': data.lastName,
            'position': data.position
        }).then((res)=> {
            deferred.resolve(res.key);
        });

        return deferred.promise;
    }

    get() {
        const deferred = this.$q.defer();

        var usersRef = this.firebase.database().ref('personal/');
        usersRef.on('value', (res) => {
            deferred.resolve(res.val());
        });

        return deferred.promise;
    }
}

export default tableService;