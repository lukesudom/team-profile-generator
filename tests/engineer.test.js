import Engineer from '../lib/Engineer';

let engineer = new Engineer ('Luke Marshall', 'lukemarshall511@gmail.com', 'lukesudom');

test ('does this create an engineer object?', () => {

    expect(engineer.github).toEqual(expect.any(String));
});

test ('github test for engineer', () => {
    expect (engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {

    expect(engineer.getRole()).toEqual("Engineer");
});

