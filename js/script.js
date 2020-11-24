let numberElements = document.querySelector('.number-elements');
let textContainer = document.querySelector('.text-container');
let chkImage = document.querySelector('.chk-image');
let imgSettings = document.querySelector('.img-settings');
let imgTypes = imgSettings.querySelectorAll('[name="img-type"]');
let imgClass;

let rangeText = document.querySelector('.size-text');
let sizeText = document.querySelector('.size');

let newElements = document.querySelector('.new-elements');

let btnCreate = document.querySelector('.btn-create');
let btnRemove = document.querySelector('.btn-remove');

let elem;

chkImage.onchange = function() {
    imgSettings.classList.toggle('img-settings__hidden');
}

rangeText.oninput = function() {
    let fontSize = rangeText.value;
    let children = newElements.childNodes;

    sizeText.textContent = fontSize;

    for (let i = 0; i < children.length; i++) {
        children[i].style.fontSize = fontSize + 'px';
    }
}

btnCreate.onclick = function() {
    for(let i = 0; i < +numberElements.value; i++) {
        elem = document.createElement('p');
        elem.textContent = textContainer.value;
        elem.classList.add('elem');
        elem.style.fontSize = sizeText.textContent + 'px';

        newElements.appendChild(elem);

        if(chkImage.checked) {
            let image = document.createElement('img');
            image.src = 'img/photo.jpg';
            image.alt = 'Изображение в абзаце';
            image.title = 'Это картинка';
            image.classList.add('photo');

            imgClass = getImgType(imgTypes);
            image.classList.add(imgClass);

            elem.appendChild(image);
        }
    }
}

btnRemove.onclick = function() {
    let children = newElements.childNodes;

    for(let i = children.length - 1; i > -1; i--) {
        newElements.removeChild(children[i]);
    }
}

function getImgType(imgTypes) {
    imgClass = "";
    
    if(imgTypes[0].checked) {
        return imgClass = "photo-circle";
    }
    else if(imgTypes[1].checked) {
        return imgClass = "photo-border";
    }
    else if(imgTypes[2].checked) {
        return imgClass = "photo-angle";
    }
    else {
        return imgClass;
    }
}