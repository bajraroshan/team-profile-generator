const Engineer = require("../lib/Engineer");

describe ("Engineer", () => {
    it ("should extend employee class", () => {
        const employee = new Engineer('Roshan', 16, 'bajraroshan@gmail.com', 'bajraroshan');
        expect(employee).toEqual(Object(employee));
    });
});

describe ("get engineer github", () => {
    it ("should return the engineer's github", () => {
        const employee = new Engineer('Roshan', 16, 'bajraroshan@gmail.com', 'bajraroshan');
        expect(employee.github).toBe('bajraroshan');
    });
});

describe ("get title", () => {
    it ("should return the employee title", () => {
        const employee = new Engineer('Roshan', 16, 'bajraroshan@gmail.com', 'bajraroshan');
        expect(employee.getTitle()).toBe("Engineer");
    });
});