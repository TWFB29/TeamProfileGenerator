const Employee = require('../lib/Employee.js')

test('creates a employee object w/ name, id, & email', () => {

    const bob = new Employee('bob', 73742, 'bigBOB@yahoo.com');

    expect(bob.name).toEqual(expect.any(String));
    expect(bob.id).toEqual(expect.any(Number));
    expect(bob.email).toContain('.com'); 

  });