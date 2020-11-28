
export default class UIHelper {

  static updateText(){
    const toExterior = document.getElementById('toExterior');
    const toInterior = document.getElementById('toInterior');
    if(window.innerWidth<600){       
      toExterior.style.top = "72vh";
      toExterior.style.fontSize = "5vmin";
      toInterior.style.top = "78vh";
      toInterior.style.fontSize = "5vmin";
    }

    if(window.innerWidth>=600){          
      toExterior.style.top = "10em";
      toExterior.style.fontSize = "3vmin";
      toInterior.style.top = "13em";
      toInterior.style.fontSize = "3vmin";
    }
  }

  static showBorderOnSelectionExtColor(index){
    const contactsSheetsDiv = document.getElementById('colorPickerExt');
   
    if (contactsSheetsDiv.hasChildNodes()) {
      // Get all children of node

      const children = contactsSheetsDiv.childNodes;      
      // Loop through the children
      for (let c = 0; c < children.length; c += 1) {
        if (children[c].style) {
          children[c].style.border = '0px solid black';
        }
      }
      children[index].style.border = '3px solid black';
    }
  }

  static showBorderOnSelectionIntColor(index){
    const contactsSheetsDiv = document.getElementById('colorPickerInt');
   
    if (contactsSheetsDiv.hasChildNodes()) {
      // Get all children of node

      const children = contactsSheetsDiv.childNodes;      
      // Loop through the children
      for (let c = 0; c < children.length; c += 1) {
        if (children[c].style) {
          children[c].style.border = '0px solid black';
        }
      }
      children[index].style.border = '3px solid black';
    }
  }

  static hideExtColors() {
    // select all children and hide them  
    const contactsSheetsDiv = document.getElementById('colorPickerExt');
   
    if (contactsSheetsDiv.hasChildNodes()) {
      // Get all children of node

      const children = contactsSheetsDiv.childNodes;
      contactsSheetsDiv.style.display = 'none';
      // Loop through the children
      for (let c = 0; c < children.length; c += 1) {
        if (children[c].style) {
          children[c].style.display = 'none';
        }
      }
    }
  }

  static hideIntColors() {
    // select all children and hide them  
    const contactsSheetsDiv = document.getElementById('colorPickerInt');

    if (contactsSheetsDiv.hasChildNodes()) {
      // Get all children of node
      contactsSheetsDiv.style.display = 'none';
      const children = contactsSheetsDiv.childNodes;

      // Loop through the children
      for (let c = 0; c < children.length; c += 1) {
        if (children[c].style) {
          children[c].style.display = 'none';
        }
      }
    }
  }

  static showExtColors() {
    // select all children and hide them  
    const contactsSheetsDiv = document.getElementById('colorPickerExt');

    if (contactsSheetsDiv.hasChildNodes()) {
      // Get all children of node

      const children = contactsSheetsDiv.childNodes;
      contactsSheetsDiv.style.display = 'flex';
      // Loop through the children
      for (let c = 0; c < children.length; c += 1) {
        if (children[c].style) {
          children[c].style.display = 'flex';
        }
      }
    }
  }

  static showIntColors() {
    // select all children and hide them  
    const contactsSheetsDiv = document.getElementById('colorPickerInt');
   
    if (contactsSheetsDiv.hasChildNodes()) {
      // Get all children of node

      const children = contactsSheetsDiv.childNodes;
      contactsSheetsDiv.style.display = 'flex';
      // Loop through the children
      for (let c = 0; c < children.length; c += 1) {
        if (children[c].style) {
          children[c].style.display = 'flex';
        }
      }
    }
  }

}
