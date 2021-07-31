const Engineer = require("../lib/Engineer");

test('creates a empoyee object w/ name, id, & email', () => {

  const bob = new Engineer('Bob', 747352, 'bigBOB@yahoo.com', 'BobGitHub');

  expect(bob.name).toEqual(expect.any(String));
  expect(bob.id).toEqual(expect.any(Number));
  expect(bob.email).toContain('.com');
  expect(bob.github).toEqual(expect.any(String))
});

test('getRole should return  Engineer', () => {
  const testRole = "Engineer";
  const bob = new Engineer('Bob', 747352, 'bigBOB@yahoo.com', 'BobGitHub');
  expect(bob.getRole()).toBe(testRole);
});