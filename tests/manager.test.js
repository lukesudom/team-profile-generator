import Manager from '../lib/Manager';

let manager = new Manager ('Luke Marshall', 'lukemarshall511@gmail.com', 6);

 test('gets role of employee', () => {
    expect(manager.getRole()).toEqual("Manager");
});

test('creates an Manager object', () => {
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


