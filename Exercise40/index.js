function make_album(name, title, t = 0) {
  let obj;
  if (t == 0) {
    obj = {
      artist_name: name,
      album_title: title,
    };
  } else {
    obj = {
      artist_name: name,
      album_title: title,
      tracks: t,
    };
  }
  return obj;
}
const obj1 = make_album("Argeet", "Ham-Safr");
console.log(obj1.artist_name, obj1.artist_name);
const obj2 = make_album("Atif Aslam", "Tery-bin");
console.log(obj2.artist_name, obj2.artist_name);
const obj3 = make_album("Faiz-Ahmed-Faiz", "Ah Zindigi", 5);
console.log(obj3.artist_name, obj3.artist_name, obj3.tracks);
