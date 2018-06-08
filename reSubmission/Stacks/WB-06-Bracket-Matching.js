'use strict';

fuction isBalanced(str){
  let key = {
    '}':'{'
  }
  let stack = [];
  
  for(let i= 0; i < str.length; i++){
    let current = str[i];
    //not sure I understand this right//
    if(key[current] && stack[stack.length] !== key[current]) return false
    if(!key[current])stack.push(str[i]);
    if(key[current] === stack[stack.length-1])stack.pop();
  }
  if(stack.lenght === 0) return true;
  return false;
}