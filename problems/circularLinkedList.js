//"Given a circular linked list, implement an algorithm which returns the node at the beginning of a loop.
//Example: A -> B -> C -> D -> E -> C    (answer is C)"

//declare our function that takes in the root of a linked list, output a node(object)

// The correct usage for storing data in the Map is through the set(key, value) method
const circular = (root) => {
  const map = new Map()
  //traverse the linked list and keep track of nodes hit
  while(root) {
    if(map.has(root)) return root;
    else map.set(root, true);
    root = root.next;
  }
  return false;
}
// NOTE: needs to be es5 function definition
function LinkedList() {
  this.head = null;
}

// NOTE: needs to be es5 function definition
function Node(val) {
  this.val = val;
  this.next = null;
}

const llMultiple = new LinkedList();
const nodeList = new Node('a');
nodeList.next = new Node('d');
nodeList.next.next = new Node('b');
nodeList.next.next.next = new Node('c');
nodeList.next.next.next.next = nodeList.next;
  
llMultiple.head = nodeList;

console.log(circular(llMultiple.head));

