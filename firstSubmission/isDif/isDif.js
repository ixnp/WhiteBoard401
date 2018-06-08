isDid(obj, obj2){
  obj1Length = 0;
  obj2Length = 0;
  for(let key in obj2){
    obj2Length ++;
  }
  for(let key in obj1){
    if(obj1[key]!==obj2[key]){
      return true;
    }
    obj1Length ++
  }
  if(obj1Length !== obj2Length){
    return true;
  }
  return false; 
}