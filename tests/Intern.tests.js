const Intern = require("../lib/Intern");

test("creates Intern object", () => {
  const intern = new Intern("Bill", "ray@email.com", 1, "BILL+U");

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's name", () => {
  const intern = new Intern("Bill", "ray@email.com", 1, "BILL+U");

  expect(intern.getName()).toEqual(expect.any(String));
});

test("gets intern's email", () => {
  const intern = new Intern("Bill", "ray@email.com", 1, "BILL+U");

  expect(intern.getEmail()).toEqual(expect.any(String));
});

test("gets intern's id", () => {
  const intern = new Intern("Bill", "ray@email.com", 1, "BILL+U");

  expect(intern.getId()).toEqual(expect.any(Number));
});

test("gets intern's school", () => {
  const intern = new Intern("Bill", "ray@email.com", 1, "BILL+U");

  expect(intern.getSchool()).toEqual(expect.any(String));
});

test("gets intern's role", () => {
  const intern = new Intern("Bill", "ray@email.com", 1, "BILL+U");

  expect(intern.getRole()).toEqual(expect.any(String));
});