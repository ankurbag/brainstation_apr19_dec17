const header = document.getElementById('header');
const headerTitle = createElement('h1', 'header__title', 'JavaScript Promises');
header.appendChild(headerTitle);

const footer = document.getElementById('footer');
const footerTitle = createElement('h3', 'footer__title', 'Hello Footer');
footer.appendChild(footerTitle);

const imageList = document.getElementById('imageList');

function appendImagesWithPromise() {
  // images is array from imageData.js, important it must be included in the html before main.js
  images.forEach((imageObject) => {
    const listItem = createElement('li', 'image-list__item');
    const title = createElement('h3', 'image-list__title');
    title.innerText = imageObject.title;
    listItem.appendChild(title);
    // async function, promise resolved or rejected, .then() if success .catch if error
    loadImage(imageObject.url)
      .then((image) => {
        image.classList.add('image-list__img');
        listItem.appendChild(image);
        imageList.appendChild(listItem);
      })
      .catch((err) => console.log(err));
  });
}

function appendImages() {
  // non promise
  images.forEach((imageObject) => {
    const listItem = createElement('li', 'image-list__item');
    const title = createElement('h3', 'image-list__title');
    title.innerText = imageObject.title;
    listItem.appendChild(title);

    const image = document.createElement('img', 'image-list__img');
    image.src = imageObject.url;
    listItem.appendChild(image);
    imageList.appendChild(listItem);
  });
}

// utility to build DOM elements with classes
function createElement(element, className, text = null) {
  const newElement = document.createElement(element);
  if (text) newElement.innerText = text;
  newElement.classList.add(className);
  return newElement;
}

function loadImage(url) {
  return new Promise((resolve) => {
    const image = new Image();
    image.addEventListener('load', () => {
      resolve(image);
    });
    image.src = url;
  });
}

// comment out one function at a time to see the difference
//appendImagesWithPromise();
// vs
appendImages();
