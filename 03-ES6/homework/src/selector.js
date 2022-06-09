var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl) === true){
    resultSet.push(startEl);
  } 

  for (var i = 0; i < startEl.children.length; i++) { // cuenta los hijos primarios que tiene
    let elements = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...elements];
}
return resultSet;
   
}

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí

  if(selector[0] === '#'){
    return "id";
  }
  if(selector[0] === '.'){
    return "class";
  }
  
    if(selector.includes(".")){
      return "tag.class";
    }
  // if(selector.split('.').length >1)
  //  return 'tag.class';
   /*
  for(let i = 1; i < selector.length; i++){
    if(selector[i] === '.'){
      return "tag.class";
    }
  }*/
  
  return "tag";  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {

  var selectorType = selectorTypeMatcher(selector);

  var matchFunction;
  
  if (selectorType === "id") { 
    matchFunction = (element) => {

      if("#"+element.id === selector){
        return true;
      }
      else
      {
        return false;
      }
    };
  } else if (selectorType === "class") {
    matchFunction = (element) => {

      let classes = element.classList; // clase1, clase2, clase 3
      for(let i = 0; i < classes.length; i++){
        if(`.${classes[i]}` === selector) {
          return true;
        }
      }
      return false;

      // if(element.classList.contains(selector.substring(1))){ // classList devuelve todas las clases en un arreglo
      //   return true;
      // }
      // else
      // {
      //   return false;
      // }
    };
    
    
  } else if (selectorType === "tag.class") {

    // matchFunction = function(element){
    // var [tagBuscado, classBuscada] = selector.split('.');

    // let tag = matchFunctionMaker(tagBuscado);

    // return matchFunctionMaker(tagBuscado)(element) && matchFunction(`${classBuscada}`)(element)
    // }
    matchFunction = (element) => {
      if (element.tagName == selector.substring(0, selector.indexOf('.')).toUpperCase()){
        if (element.classList.contains(selector.substring(selector.indexOf('.') + 1))) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  } else if (selectorType === "tag") {
    matchFunction = () => {
      return true;
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
