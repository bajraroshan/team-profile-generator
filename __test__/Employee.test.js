const Employee = require("../lib/Employee");

describe ("Employee", () => {
    it ("should return an employee object", () => {
        const employee = new Employee('Roshan', 16, 'bajraroshan@gmail.com');
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });
});

describe ("get employee name", () => {
    it ("should return the employee name", () => {
        const employee = new Employee('Roshan', 16, 'bajraroshan@gmail.com');
        expect(employee.getName()).toBe('Roshan');
    });
});
describe ("get employee id", () => {
    it ("should return the employee id", () => {
        const employee = new Employee('Roshan', 16, 'bajraroshan@gmail.com');
        expect(employee.getId()).toBe(16);
    });
});

describe ("get employee email", () => {
    it ("should return the employee email", () => {
        const employee = new Employee('Roshan', 16, 'bajraroshan@gmail.com');
        expect(employee.getEmail()).toEqual('bajraroshan@gmail.com');
    });
});

describe ("get role", () => {
    it ("should return the employee role", () => {
        const employee = new Employee('Roshan', 16, 'bajraroshan@gmail.com');
        expect(employee.getTitle()).toBe("Employee");
    });
});