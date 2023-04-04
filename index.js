let employee = {
    name : "Reagan",
    streetAddress: "Ndemi Road",
}


function updateEmployeeWithKeyAndValue(employeeObject,key,value){
    return {
        ...employee, 
        [key] : value,
    };
}


function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject,key,value){
    employeeObject[key]= value;
    return employeeObject;
}


function deleteFromEmployeeByKey(employeeObject,key){
    const newEmployee = {...employeeObject};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employeeObject,key){
    delete employeeObject[key];
    return employeeObject;
}