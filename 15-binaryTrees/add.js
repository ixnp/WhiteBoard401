
add() {
  let sum = 0;
  _add(this.root);
  _add(node){
    if(node.left){
      _add(node.left);
    }
    if(node.right){
    _add(node.right);
    }
    sum = sum = node.val;
  }
  return sum;
}