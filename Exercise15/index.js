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

console.log(
  `\nI have just heard that ${invitation_list[1]} is not comming due to some personal reasons. So I have just decided to invite another person!`
);
invitation_list.splice(1, 1, "Gulam Haider");
console.log("\nAfter modifying the invitation");
print_invitation();
