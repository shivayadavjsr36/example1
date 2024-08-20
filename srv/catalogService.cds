using { testprac.db.master } from '../db/empdatamodel';

service catalogService @(path: 'catalogService'){
    entity EmployeeSet as projection on master.employees;
}
