const Employee = require('../lib/Employee.js')

test('creates a employee object with name, id, email', () => {
    const tommy = new Employee('Tommy', 2520, 'tomBoy29@yahoo.com');

    expect(tommy.name).toEqual(expect.any(String));
    expect(tommy.id).toEqual(expect.any(Number));
    expect(tommy.email).toContain('.com');
});