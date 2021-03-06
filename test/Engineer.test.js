const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("get_role() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.get_role()).toBe(testValue);
});

test("Can get GitHub username via get_github()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.get_github()).toBe(testValue);
});

test("get_icon() should return \"fa-lightblub-o\"", () => {
    const testValue = "fa-lightbulb-o";
    const e = new Engineer("Alice", 1, "test@test.com", "github_username");
    expect(e.get_icon()).toBe(testValue);
  });