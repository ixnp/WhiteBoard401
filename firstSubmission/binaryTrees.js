 class TreeNode{
  constructor(value, left, right){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

 class BinaryTree () {
  constructor () {
    this.root = null;
  }
}

isEmpty () {
  return this.root === null;
};

contains(value){
  return this._contains( value this.root);
}
_contains(value, node){
  if(node === null){return false}
  if(node.value === value){
    return true;
  }
 return this._contains(vale, node.right) ||
  this._contains(vale, node.left);
}

toString(){
  return this._toString(this.root);
}

_toString(){
if(node === null){
  return '';
}
let result = '' + node.value;
result += this._toString(node.left);
result += this._toString(node.right);
return result; 
}
module.exports ={
  TreeNode,
  BinaryTree
}