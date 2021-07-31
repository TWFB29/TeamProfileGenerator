const Manager = require("../lib/Manager");

test('creates a empoyee object w/ name, id, & email', () => {

  const bob = new Manager('Bob', 747352, 'bigBOB@yahoo.com', '123-456-7890');

  expect(bob.name).toEqual(expect.any(String));
  expect(bob.id).toEqual(expect.any(Number));
  expect(bob.email).toContain('.com');
  expect(bob.officeNumber).toEqual(expect.any(String))
});

test('getRole should return  Manager', () => {
  const testRole = "Manager";
  const bob = new Manager('Bob', 747352, 'bigBOB@yahoo.com', '123-456-7890');
  expect(bob.getRole()).toBe(testRole);
});
