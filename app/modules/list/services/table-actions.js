class tableService {
    constructor($q, firebase) {
        this.firebase = firebase;
        this.$q = $q;
    }

    save(data) {
        const deferred = this.$q.defer();

        this.firebase.database()
            .ref('personal/')
            .push({
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

        this.firebase.database()
            .ref('personal/')
            .on('value', (res) => {
                deferred.resolve(res.val());
            });

        return deferred.promise;
    }

    remove(key) {
        this.firebase.database()
            .ref('personal/')
            .child(key)
            .remove();
    }

    update(key, data) {
        console.log(data);
        this.firebase.database()
            .ref('personal')
            .child(key)
            .update(data);
    }
}

export default tableService;