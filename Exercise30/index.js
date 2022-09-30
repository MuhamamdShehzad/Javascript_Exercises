const user_names = ["admin", "Ali", "Ahmed", "Zia Khan", "Shehzad"];

function print_user_names() {
  for (let i = 0; i < user_names.length; i++) {
    if (user_names[i] == "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${user_names[i]}, thank you for logging in again.`);
    }
  }
}
print_user_names();
