function check(str){
  let stack =[];
  let cap = str.length;
  for(let i = 0; i < cap; i++){
    if(str[i]==='}' && cap ===0){
      return false
    }else if( str[i] === '}'){
      stack.push();
    }else{
      stack.pop();
    }
    if(stack === 0){
      return false
    }else{
      return true 
      }
    }
  }