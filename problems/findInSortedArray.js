// You are given a sorted array and you want to find the number N. How do you do the search as quickly as possible

sorted = [1, 2, 3, 4, 5, 6, 7, 8];
//create function find -- number n and array
function find (n, array){
    
    //if array.length equal to 0 return no number found
    if (array.length === 0) return "no number found" 
    console.log(array.length)
    
    let mid = Math.floor(array.length/2)
    console.log(mid)
    
    // comapare N number to see if bigger than mid point 
    let leftHalf = array.slice(0, mid)
    let rightHalf = array.slice(mid + 1)
    if (n === array[mid]) return array[mid]
    if (n > array[mid]){
        // if so  pass the right half into find function 
         return find(n, rightHalf)
   

    } else {
        return find(n, leftHalf)
  
    }
    // else pass left half into find function
}

console.log(find(5, sorted))