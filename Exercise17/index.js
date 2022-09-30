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

console.log(`\nAha! I have now found a bigger dinner table\n`);
invitation_list.splice(0, 0, "Muhammad Amir");
invitation_list.splice(3, 0, "Fahmida Akhtar");
invitation_list.push("Lal Khan");
console.log("\nAfter modifying the invitation");
print_invitation();

console.log(
  `\nAha! I have now found that we have place for only two pwrsons.\n`
);
let l = invitation_list.length - 2;
for (let i = 0; i < l; i++) {
  const str = invitation_list.pop();
  console.log(`Sorry! for inconvenience ${str}, We cann't invite you! `);
}
console.log("\nFollowing people are still invited.\n");
print_invitation();
invitation_list.pop();
invitation_list.pop();
print_invitation();
