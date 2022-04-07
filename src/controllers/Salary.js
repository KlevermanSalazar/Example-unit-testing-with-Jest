class Salary {
  calculateNetSalary(salary,tax) {
      return salary - (salary * tax) / 100; // Returns net salary
  }
}

module.exports = Salary;
