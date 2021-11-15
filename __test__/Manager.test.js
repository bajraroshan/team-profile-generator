const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should extend employee class", () => {
    const employee = new Manager("Roshan", 16, "bajraroshan@gmail.com", 1);
    expect(employee).toEqual(Object(employee));
  });
});

describe("get manager office number", () => {
  it("should return the manager's office number", () => {
    const employee = new Manager("Roshan", 16, "bajraroshan@gmail.com", 1);
    expect(employee.officeNumber).toBe(1);
  });
});

describe("get title", () => {
  it("should return the employee title", () => {
    const employee = new Manager("Roshan", 16, "bajraroshan@gmail.com", 1);
    expect(employee.getTitle()).toBe("Manager");
  });
});
