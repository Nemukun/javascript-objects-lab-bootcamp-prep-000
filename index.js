var recipes = {
  'vegetable':'potatoes',
  'spice':'salt',
}

function updateObjectWithKeyAndValue(object,key,value){
  recipes[key]=value;
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes[key]=value;
  return recipes;
}

function deleteFromObjectByKey(object, key){
  
  
}

function destructivelyDeleteFromObjectByKey(object, key){
  
}