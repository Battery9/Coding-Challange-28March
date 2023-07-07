function ageInDays(person, callback) {
    const fullName = `${person.firstName} ${person.lastName}`;
    const ageInDays = person.age * 365;
  
    callback(fullName,ageInDays)
  }
  
  function logResult(name, age) {
    console.log(`The person's full name is ${name} and their age in days is ${age}.`)
  }
  
  const person = {
    firstName: 'Mithun',
    lastName: 'S',
    age: 20
  };
  
  ageInDays(person, logResult);