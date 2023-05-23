function compareStrings(string1, string2) {
  const copy1 = string1.toUpperCase() + string1;
  const result = string2.split("").every((letter) => copy1.includes(letter));
  console.log(result);
}

// function compareStrings2(string1, string2) {
//   let result;
//   string1.split("").forEach((letter, i) => {
//     if()
//   });

//  return result
// }

compareStrings("ebCde", "BCD"); //TRUE
compareStrings("eCB", "ECB"); //TRUE (e was uppercased)
compareStrings("BcdEF", "BCEF"); //TRUE (c was uppercased, d was discarded)
compareStrings("BCD", "BcD"); //FALSE (C could not be lowercased)
