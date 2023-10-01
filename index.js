const employee = {
    name: "John",
    streetAddress: "1111 House",
};


function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = { ...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const clonedEmployee = { ...employee};
    delete clonedEmployee[key];
    return clonedEmployee;
}

function  destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}