let array = [1, 2, 3, 4, 5, 7, 8, 9];

for (let i = 0; i < array.length; i++) {
  if (array[i] == 1) {
    console.log(`${array[i]}st`);
  } else if (array[i] == 2) {
    console.log(`${array[i]}nd`);
  } else if (array[i] == 3) {
    console.log(`${array[i]}rd`);
  } else {
    console.log(`${array[i]}th`);
  }
}
