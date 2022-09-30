function add_items(...arg) {
  console.log("You have ordered Sandwitch with following items");
  for (let i = 0; i < arg.length; i++) {
    console.log(`${arg[i]}`);
  }
}
add_items("red sauce", "green sauce", "chili sauce");

add_items("red sauce", "chili sauce");
add_items("chili sauce");
