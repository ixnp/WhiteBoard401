class LinkNode{
    constructor(val,next){
      this.val = val;
      this.next = next;
    }
  }
  function contains(val){
    console.log("value", val);
    
  const value = val;  
    
  let n5 = new LinkNode(5);
  let n7 = new LinkNode(7);
  let n9 = new LinkNode(9);
  let n12 = new LinkNode(12);
  let n15 = new LinkNode(15);
  
  let root = n5;
  n5.next = n7;
  n7.next = n9;
  n9.next = n12;
  n12.next = n15;
  
  console.log('root', root);
  let current = root;
  console.log('current out', current);
  
    while(current){
    console.log('current', current.val);
      if( value === current.val){
       
        return true;
      }
      current = current.next;
    }
   return false; 
  }