const names = ["Ali", "Umair", "Umer"];

function make_great() {
  for (let i = 0; i < names.length; i++) {
    names[i] = `The Great ${names[i]}`;
  }
}
function show_magicians() {
  console.log("Magicians names are following!.");
  for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]}`);
  }
}
make_great();
show_magicians();
