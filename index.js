var recipes = {
  potatoes: 3,
  tomatoes: 2,
}

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({},object,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return recipes;
}

function deleteFromObjectByKey(object, key){
  
  
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete
}