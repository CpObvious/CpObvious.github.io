let numberElements = document.querySelector('.number-elements');
let textContainer = document.querySelector('.text-container');

let chkImage = document.querySelector('.chk-image');
let imgSettings = document.querySelector('.img-settings');
let imgChange = document.querySelector('.img-change');
let imgTypes = imgSettings.querySelectorAll('[name="img-type"]');

let rangeText = document.querySelector('.size-text');
let sizeText = document.querySelector('.size');

let newElements = document.querySelector('.new-elements');

let btnCreate = document.querySelector('.btn-create');
let btnRemove = document.querySelector('.btn-remove');

let elem, imgClass, children;;

function createElem() {
    elem = document.createElement('p');
    elem.textContent = textContainer.value;
    elem.classList.add('elem');
    elem.style.fontSize = sizeText.textContent + 'px';

    return elem;
}

function getImgType(imgTypes) {
    if (imgTypes[0].checked) {
        return imgClass = "photo-circle";
    }
    else if (imgTypes[1].checked) {
        return imgClass = "photo-border";
    }
    else if (imgTypes[2].checked) {
        return imgClass = "photo-angle";
    }
}

function createImg() {
    let image = document.createElement('img');

    image.src = 'img/photo.jpg';
    image.alt = 'Изображение в абзаце';
    image.title = 'Это картинка';
    image.classList.add('photo');
    image.classList.add(imgClass);

    return image;
}

chkImage.onchange = function() {
    imgSettings.classList.toggle('img-settings__hidden');
}

for (let i = 0; i < imgTypes.length; i++) {
    imgTypes[i].oninput = function () {
        if (imgChange.checked) {
            children = newElements.querySelectorAll('.photo');

            for (let i = 0; i < children.length; i++) {
                imgClass = getImgType(imgTypes);

                children[i].classList.remove('photo-circle');
                children[i].classList.remove('photo-border');
                children[i].classList.remove('photo-angle');

                children[i].classList.add(imgClass);
            }
        }
    }
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
        elem = createElem();
        newElements.appendChild(elem);

        imgClass = getImgType(imgTypes);

        if(chkImage.checked && !imgChange.checked) {
            let image = createImg();
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