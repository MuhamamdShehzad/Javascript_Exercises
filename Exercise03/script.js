const p_name = "Imran aHmed kHAN nAizI";
console.log(
  `Name in LowerCase: ${p_name.toLowerCase()}\nName in UpperCase: ${p_name.toUpperCase()}\nName in TitleCase: ${toTitleCase(
    p_name
  )}`
);
function toTitleCase(str) {
  str = str.toLowerCase();
  str = str.split(" ");

  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}
