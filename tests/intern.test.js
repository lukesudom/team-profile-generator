import Intern from '../lib/Intern';


let intern = new Intern ('Luke Marshall', 'lukemarshall511@gmail.com', 'USYD');

 test('gets employee school', () => {
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    expect(intern.getRole()).toEqual("Intern");
}); 

test('creates an Intern object', () => {
    
    expect(intern.school) .toEqual(expect.any(String));
});






