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
                'position': data.position,
                'time': Date.now()
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
                let arr = [],
                    values = res.val();

                for (let i in values) {
                    values[i].key = i;
                    arr.push(values[i])
                }

                deferred.resolve(arr);
            });

        return deferred.promise;
    }

    remove(key) {
        this.firebase.database()
            .ref('personal/')
            .child(key)
            .remove();
    }

    update(persona) {
        const key = persona.key;

        this.firebase.database()
            .ref('personal')
            .child(key)
            .update(persona);
    }
}

export default tableService;