const invitation_list = [
  "Raja Muhammad Akbar",
  "Ammer Beghum",
  "Sardar Bano",
  "Shah Nawaz",
];
console.log("\nI would like to invite following.\n");
function print_invitation() {
  for (let i = 0; i < invitation_list.length; i++) {
    console.log(
      `Hi! ${invitation_list[i]}, I would like to invite you to my dinner!`
    );
  }
}
print_invitation();
