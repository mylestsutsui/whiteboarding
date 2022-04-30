// "Given a list of words, write a program to find the longest word made of other words in the list.
// Example: ['dog', 'cat', 'walker', 'dogwalker'] -> 'dogwalker'"

//if it is return word, since we know it's the longest because we start with the longest
//if no words exist that are made up of other words, return empty string

//create a function that takes in an array, ouput will be a string
const longestWord = (arr) => {
  //sort the array from longest to shortest word
  arr.sort((a, b) => b.length - a.length);
  //iterate over sorted array
  for(let i = 0; i < arr.length; i++) {
    //for each word, starting with longest iterate over array again and check if word is made of other words in array
    let temp = arr[i];
    for(let j = i + 1; j < arr.length; j++) {
      temp = temp.replace(arr[j], '');
      if (temp === '') {
        return arr[i];
      };
    } 
    
  }
  return '';
}

console.log(longestWord(['dog', 'dogwalkercat', 'cat', 'walker', 'dogwalker']));

console.log('dogwalker'.slice('dogwalker'.indexOf('dog') + 'dog'.length));

console.log('dogwalkercat'.replace('cookie', ''));