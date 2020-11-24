let btnCreate = document.querySelector('.btn-create');
let btnremove = document.querySelector('.btn-remove');
let newElements = document.querySelector('.new-elements');
let elem;
let numberElements = document.querySelector('.number-elements');


btnCreate.onclick = function() {
    for(let i = 0; i < +numberElements.value; i++) {
        elem = document.createElement('p');
        elem.textContent = "Новый абзац...";
        elem.classList.add('elem');
        if(i == 0){
          elem.style.backgroundColor = "darkred";
          elem.style.color = "white";
        }
        newElements.append(elem);
    }
}
btnRemove.onclick = function() {
  let children = newElements.childNodes;
  for (let i=children.length - 1; i > -1; i--) {
    newElements.removeChild(children[i]);
  }
}