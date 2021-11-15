const Intern = require("../lib/Intern");

describe ("Intern", () => {
    it ("should extend employee class", () => {
        const employee = new Intern('Roshan', 16, 'bajraroshan@gmail.com', 'University of Adelaide');
        expect(employee).toEqual(Object(employee));
    });
});

describe ("get intern school", () => {
    it ("should return the intern's school", () => {
        const employee = new Intern('Roshan', 16, 'bajraroshan@gmail.com', 'University of Adelaide');
        expect(employee.school).toBe('University of Adelaide');
    });
});

describe ("get title", () => {
    it ("should return the employee title", () => {
        const employee = new Intern('Roshan', 16, 'bajraroshan@gmail.com', 'University of Adelaide');
        expect(employee.getTitle()).toBe("Intern");
    });
});