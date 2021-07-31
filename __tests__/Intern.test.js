const Intern = require('../lib/Intern')

test('creates an intern object w/ name, id, email, & school', () => {

    const bob = new Intern('Bob', 747352, 'bigBOB@yahoo.com', 'Ohio State');

    expect(bob.name).toEqual(expect.any(String));
    expect(bob.id).toEqual(expect.any(Number));
    expect(bob.email).toContain('.com');
    expect(bob.school).toEqual(expect.any(String));
});

test('getRole should return  Intern', () => {
    const testRole = "Intern";
    const bob = new Intern('Bob', 747352, 'bigBOB@yahoo.com', 'Ohio State');
    expect(bob.getRole()).toBe(testRole);
});