const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("get_role() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.get_role()).toBe(testValue);
});

test("Can get school via get_school()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.get_school()).toBe(testValue);
});

test("get_icon() should return \"fa-smile-o\"", () => {
    const testValue = "fa-smile-o";
    const e = new Intern("Alice", 1, "test@test.com", "MSU");
    expect(e.get_icon()).toBe(testValue);
  });