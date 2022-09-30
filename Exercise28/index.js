const age = 5;

if (age < 2) {
  console.log(`\nPerson's age is ${age}. Person is baby `);
} else if (age >= 2 && age < 4) {
  console.log(`\nPerson's age is ${age}. Person is toddler `);
} else if (age >= 4 && age < 13) {
  console.log(`\nPerson's age is ${age}. Person is kid `);
} else if (age >= 13 && age < 20) {
  console.log(`\nPerson's age is ${age}. Person is teenager `);
} else if (age >= 20 && age < 65) {
  console.log(`\nPerson's age is ${age}. Person is adult `);
} else if (age >= 65) {
  console.log(`\nPerson's age is ${age}. Person is elder `);
}
