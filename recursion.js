function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str === "") return "";
  return str[str.length - 1] + reverse(str.slice(0, -1));
}

console.log(reverse("Hello World!"));
