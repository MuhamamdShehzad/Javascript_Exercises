function make_car(modl, nam, ...arg) {
  let obj;
  obj = {
    model: modl,
    name: nam,
    features: arg,
  };
  return obj;
}
let obj = make_car("2015", "Mehran", "White", " 4 seats");
console.log(`${obj.model}, ${obj.name}, ${obj.features}`);
