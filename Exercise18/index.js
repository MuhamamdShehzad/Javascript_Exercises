let places = ["Qatar", "UAE", "USA", "Turkey", "Autria"];

function print_places(places_array) {
  for (let i = 0; i < places_array.length; i++) {
    process.stdout.write(`${places_array[i]}   `);
  }
}
// printing orignal string
process.stdout.write("\n\nI would like to visit these countries: ");
print_places(places);
// making anothor list for places beacuse direct sorting will chainge the position of places.
let temp_places = [];
for (let i = 0; i < places.length; i++) {
  temp_places.push(places[i]);
}
temp_places.sort(); // usiing the sort function
process.stdout.write("\n\nAfter sorting alphabetically!: ");
print_places(temp_places);
process.stdout.write(
  "\n\nThe orignal array is same because I made another array to sort: "
);
print_places(places);
process.stdout.write('\n\nAfter alphabetically reverseing the array: ')
temp_places.reverse();
print_places(temp_places)
process.stdout.write("\n\nAfter reversing the orginal array: ");
print_places(places.reverse());
process.stdout.write(
  "\n\nAfter again reversing the array, we will get orignal array: "
);
print_places(places.reverse());
process.stdout.write(
  "\n\nAfter sorting orginal array, it's order has been changed: "
);
print_places(places.sort());
process.stdout.write("\n\nAfter reversing orignal alphabtical array: ");
print_places(places.reverse());
console.log("\n");
