let btnCreate = document.querySelector('.btn-create');
let btnRemove = document.querySelector('.btn-remove');
let newElements = document.querySelector('.new-elements');
let numberElements = document.querySelector('.number-elements');
let textContainer = document.querySelector('.text-container');
let chkImage = document.querySelector('.chk-image');
let elem;

btnCreate.onclick = function () {
    for(let i = 0; i < +numberElements.value; i++) {

        elem = document.createElement('p');
        elem.textContent = textContainer.value;
        elem.classList.add('elem');

        newElements.appendChild(elem);

        if(chkImage.checked) {
            let image = document.createElement('img');
            image.src = 'img/photo.jpg';
            image.alt = 'Изображение в абзаце';
            image.classList.add('photo');

            elem.appendChild(image);
        }
    }
}

let children = newElements.childNodes;

btnRemove.onclick = function() {
    for(let i = children.length - 1; i > -1; i--) {
        newElements.removeChild(children[i]);
    }
}