export default class ListController {
    constructor($scope, tableService) {
        this.$scope = $scope;
        this.user = {};
        this.tableService = tableService;
        this.personal = {};

        this.getData();
    }

    send(data) {
        this.tableService.save(data).then((res)=> {
            this.$scope.personalForm.$setUntouched();
            this.user = {};

            this.personal[res] = data;
        });
    }

    getData() {
        this.tableService.get().then((res) => {
            this.personal = res;
        })
    }

    deleteData() {
        const personal = this.personal;

        for (let i in personal) {
            if (personal[i].checked) {
                this.tableService.remove(i);
                delete personal[i];
            }
        }
    }

    updateData(key){
        this.tableService.update(key, this.personal[key]);
    }
}