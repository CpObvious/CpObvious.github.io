let btnCreate = document.querySelector('.btn-create');
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