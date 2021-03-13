const ukraine = {
  tax: 0.195,
  middleSalary: 1789,
  vacancies: 11476
};
const latvia = {
  tax: 0.25,
  middleSalary: 1586,
  vacancies: 3921
};
const litva = {
  tax: 0.15,
  middleSalary: 1509,
  vacancies: 1114
};

// Function 1: counts tax in country
function getMyTaxes(salary) {
  return this.tax * salary;
}

// Function 2: counts average tax in country
function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}

// Function 3: counts average tax all specialists in country
function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}

// Function 4: makes object {salary:, taxes:, profit:}
function getMySalary(country) {
  const minSalary = 1500,
    maxSalary = 2000;
  const salary = Math.trunc(Math.random() * (maxSalary - minSalary) + minSalary);
  const taxes = Math.round(country.tax * salary);
  const profit = salary - taxes;
  const obj = {
    salary,
    taxes,
    profit,
  };
  console.log(obj);
  setTimeout(() => getMySalary(country), 10000);
}

console.log('Function 1: It is a tax in Latvia: ', getMyTaxes.call(latvia, 1000));
console.log('Function 1: It is a tax in Litva: ', getMyTaxes.call(litva, 1000));
console.log('Function 1: It is a tax in Ukraine: ', getMyTaxes.call(ukraine, 1000));

console.log('Function 2: It is an average tax in Latvia: ', getMiddleTaxes.call(latvia));
console.log('Function 2: It is an average tax in Litva: ', getMiddleTaxes.call(litva));
console.log('Function 2: It is an average tax in Ukraine: ', getMiddleTaxes.call(ukraine));

console.log('Function 3: It is an average tax all specialists in Latvia: ', getTotalTaxes.call(latvia));
console.log('Function 3: It is an average tax all specialists in Litva: ', getTotalTaxes.call(litva));
console.log('Function 3: It is an average tax all specialists in Ukraine: ', getTotalTaxes.call(ukraine));

console.log('Function 4: There are salary objects in Latvia, Litva, Ukraine:')
getMySalary(latvia);
getMySalary(litva);
getMySalary(ukraine);