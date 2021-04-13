/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length === 0) return 1
  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, maxlength = 0){
  if(words.length === 0) return maxlength
  maxlength = (words[0].length > maxlength) ? words[0].length : maxlength
  return longest(words.slice(1),maxlength)
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if(str.length === 0) return ""
  return str[0] + everyOther(str.slice(2))
}

/** isPalindrome: checks whether a string is a palindrome or not. */

// function isPalindrome(str) {
//   let string = (Array.isArray(str)) ? str : str.split("")
//   if(string.length === 1) return true
//   let first = string.shift()
//   let last = string.pop()
//   if(first !== last) return false
//   return isPalindrome(string)
// }

function isPalindrome(str, idx = 0) {  //from solution
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, count = 0){
  if(count > arr.length) return -1
  if(arr[count] === val) return count
  count++
  return findIndex(arr,val,count)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length === 0) return ""
  let string = (Array.isArray(str)) ? str : str.split("").reverse()
  return string[0] + revString(string.slice(1))
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj,arr = []){
  for(let key in obj){
      if(typeof obj[key] === 'string'){
          arr.push(obj[key])
      } else if(typeof obj[key] === 'object'){
          arr.push(...gatherStrings(obj[key]))
      } 
  }
  return arr
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) { // from solution
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
