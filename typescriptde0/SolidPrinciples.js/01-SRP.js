/*
function calculateSalary(employee) {
  const salary = employee.hoursWorked * employee.payForHour;
  const report = `
    Name: ${employee.name}
    Hour worked: ${employee.hoursWorked}
    Pay for hour: ${employee.payForHour}
    Total Salary: ${salary}
    `;
  console.log(report);
  return salary;
}
*/
//esto no cumple con el principio de responsabilidad única ya que calcula el salario y además genera un reporte dentro de la misma función
// por lo tanto debemos dejarlo en funciones distintas de esta manera

function calculateSalary(employee) {
  const salary = employee.hoursWorked * employee.payForHour;
  return salary;
}
function generateReport(employee, salary) {
  const report = `
    Name: ${employee.name}
    Hour worked: ${employee.hoursWorked}
    Pay for hour: ${employee.payForHour}
    Total Salary: ${salary}
    `;
  console.log(report);
}
const salary = calculateSalary(employee);
generateReport(employee, salary);
