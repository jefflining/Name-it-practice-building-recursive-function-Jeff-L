function reverseString(str) {
  if (str.length === 1 || str.length === 0) {
        return str;
 }
 return str.charAt(str.length -1) + reverseString(str.slice(0,-1));
}
console.log(reverseString("hello"));

