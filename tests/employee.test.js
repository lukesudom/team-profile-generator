import Employee from "../lib/Employee";

let employee = new Employee ('Luke Marshall', 15, 'lukemarshall511@gmail.com');

test ('employee object test', () => {


    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
});


test ('get employee email', () => {


    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));

});

test ('gets employee ID', () => {


    expect(employee.getID()).toEqual(expect.any(Number));
});

test ('gets employee Name', () => {


    expect(employee.getName()).toEqual(expect.any(String));
});

test ('gets employee Role', () => {

    expect(employee.getRole()).toEqual("Employee");
});

