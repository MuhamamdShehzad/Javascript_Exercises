const names = ["Ali", "Umair", "Umer"];
const temp_names = [];
function make_great() {
  for (let i = 0; i < names.length; i++) {
    temp_names.push(`The Great ${names[i]}`);
  }
}
function show_magicians(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${array[i]}`);
  }
}
make_great();
console.log("Magician's orginal names are following!.");
show_magicians(names);
console.log("Magician's names after modifying are following!.");
show_magicians(temp_names);
