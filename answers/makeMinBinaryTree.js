// Given a sorted array, find a way to make a binary tree with minimal height

const sorted = [1, 2, 3, 4, 5, 6, 7]

function Bst (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}



const makeMinBinaryTree = (array) => {
  if (array.length === 0) return null
  if (array.length === 1) return new Bst(array[0])
  
  const middleIndex = Math.floor(array.length / 2)
  const node = new Bst(array[middleIndex])

  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex + 1);

  node.left = makeMinBinaryTree(leftArray);
  node.right = makeMinBinaryTree(rightArray);
  
  return node;
}

console.log(makeMinBinaryTree(sorted))