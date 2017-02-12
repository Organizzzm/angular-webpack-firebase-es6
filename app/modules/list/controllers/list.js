export default class ListController {
    constructor($scope, tableService) {
        this.$scope = $scope;
        this.user = {};
        this.tableService = tableService;
        this.personal = [];
        this.sortType = 'time';
        this.sortReverse = true;
        this.abpattern = /^[A-z]+$/;
        this.filter = '';

        this.getData();
    }

    addNew(data) {
        this.tableService.save(data).then((res)=> {
            this.$scope.personalForm.$setUntouched();
            this.user = {};

            data.key = res;
            this.personal.push(data);
        });
    }

    getData() {
        this.tableService.get().then((res) => {
            this.personal = res;
        })
    }

    deleteData() {
        const personal = this.personal;

        personal.forEach((item)=> {
            if (item.checked) {
                this.tableService.remove(item.key);
            }
        });

        this.getData();
    }

    updateData(persona) {
        this.tableService.update(persona);
    }

    getFilteredData(){
        console.log(this.filter)
    }
}