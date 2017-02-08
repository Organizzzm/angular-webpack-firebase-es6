export default class ListController {
    constructor($scope, firebase, tableService) {
        this.firebase = firebase;
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

            this.personal[res] = {
                name: data.name,
                lastName: data.lastName,
                position: data.position
            }
        });
    }

    getData() {
        this.tableService.get().then((res) => {
            this.personal = res;
        })

    }
}