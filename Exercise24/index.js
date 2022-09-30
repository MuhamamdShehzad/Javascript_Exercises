// Tests for equality and inequality with strings
console.log("Is Shehzad==shehzad? I predict false");
console.log("Shehzad" == "shehzad");
console.log("Is 'Imran Khan' != imran khan'? I predict true");
console.log("Imran Khan" != "imran khan");
// Tests using the lower case function
console.log("Is (Shehzad).tolowercase()==shehzad? I predict true");
console.log("Shehzad".toLocaleLowerCase() == "shehzad");
console.log("Is (Shehzad).tolowercase()==Shehzad? I predict false");
console.log("Shehzad".toLocaleLowerCase() == "Shehzad");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is (10-2)%2 == (5-3)%2 ? I predict true");
console.log((10 - 2) % 2 == (5 - 3) % 2);
console.log("Is (10-3)%2 == (5-2)%2 ? I predict false");
console.log((10 - 3) % 2 == (5 - 3) % 2);
console.log("Is 10-3+4*1/2%2 >= 10+4*1-3%2? I predict false");
console.log(10 - 3 + (((4 * 1) / 2) % 2) >= 10 + 4 * 1 - (3 % 2));

// Tests using "and" and "or" operators
console.log("Is 3 && shehzad || 5 ? I predict shehzad");
console.log((3 && "shehzad") || 5);
console.log("Is 3 && shehzad && 5 ? I predict 5");
console.log(3 && "shehzad" && 5);

//  Test whether an item is not in a array
let arr = [];
console.log("Is arr=[] == [] ? I predict false");
console.log(arr == []);
console.log("Is arr=[] === [] ? I predict false");
console.log(arr === []);
