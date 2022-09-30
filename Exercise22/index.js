let items = [
  ["Mountains: ", "Hamalia", "Hindu Kush", "Karakoram", "Salt Range"],
  ["Languages:", "Hindi", "English", "Urdu", "Punjabi"],
  ["Rivers:", "Indus", "Chanab", "Jehlum River", "Sindh River"],
  ["Cities:", "Islamabad", "Karachi", "Lahore", "Chakwal"],
];

function print_items() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      process.stdout.write(`${items[i][j]}    `);
    }
    console.log("\n");
  }
}
print_items();
