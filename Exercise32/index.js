let current_users = ["Ali", "Ahmed", "Shehzad", "Zahid", "Zeerak"];
let new_users = ["Akbar", "ALI", "ZAHID", "Faizan", "Imran Khan"];

function check_previous(str) {
  let n = str.toLowerCase();
  for (let i = 0; i < current_users.length; i++) {
    let p = current_users[i].toLowerCase();
    if (n == p) {
      return true;
    }
  }
  return false;
}
for (let i = 0; i < new_users.length; i++) {
  let str = new_users[i];
  let b = check_previous(str);
  if (b) {
    console.log(`Enter new name, this name ${str} is not available!`);
  } else {
    console.log(`This name ${str} is available`);
    current_users.push(str);
  }
}
