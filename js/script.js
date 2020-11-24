let btnCreate = document.querySelector('.btn-create');
let btnRemove = document.querySelector('.btn-remove');
let newElements = document.querySelector('.new-elements');
let numberElements = document.querySelector('.number-elements');
let elem;

btnCreate.onclick = function() {
    for(let i = 0; i < +numberElements.value; i++) {

        elem = document.createElement('p');
        elem.textContent = "Новый абзац...";
        elem.classList.add('elem');

        newElements.appendChild(elem);
    }
}

let children = newElements.childNodes;

btnRemove.onclick = function() {
    for(let i = children.length - 1; i > -1; i--) {
        newElements.removeChild(children[i]);
    }
}