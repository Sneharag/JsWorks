// Javascript objects

var employee={
    name:"hari",
    department:"hr",
    salary:45000
}

console.log(employee.name);
//        or
console.log(employee["name"]);


console.log(employee.salary);
//        or
console.log(employee["salary"]);

// adding a new attribute => if it exists it replaces, if not creates
employee.gender="male"

employee.isActive=true
//   or
employee["isActive"]=true

console.log(employee);


// update a attribute
// add 5000 with existing salary
employee.salary+=5000
//     or
employee["salary"]+=5000

console.log(employee.salary);

// chk attribute existing or not
// in
console.log("gender" in employee);





