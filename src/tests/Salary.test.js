const Salary = require("../controllers/Salary");

describe("Salary", () => {
  it("Returns the net salary if the values are valid", () => {
    const alvaro = new Salary();
    const alvaroNetSalary = alvaro.calculateNetSalary(1000000, 19);
    expect(alvaroNetSalary).toBe(810000);
  });
});
