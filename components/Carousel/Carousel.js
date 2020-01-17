/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
  const carousel = document.createElement('div');
  const leftBtn = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightBtn = document.createElement('div');
  const imgArr = [img1, img2, img3, img4];


  carousel.append(leftBtn);
  carousel.append(img1);
  carousel.append(img2);
  carousel.append(img3);
  carousel.append(img4);
  carousel.append(rightBtn);

  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  img1.classList.add('display-none');
  img2.classList.add('display-none');
  img3.classList.add('display-none');
  img4.classList.add('display-none');
  rightBtn.classList.add('right-button');

  leftBtn.textContent = '<';
  img1.src = "./assets/carousel/mountains.jpeg";
  img2.src = "./assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";
  rightBtn.textContent = '>';

  let i = 1;
  leftBtn.addEventListener('click', event => {
    if (i !== imgArr.length) {
      imgArr[imgArr.length - i].classList.remove('display-none');
      imgArr[imgArr.length - i - 1].classList.add('display-none');
    } else {
      imgArr[i].classList.add('display-none');
      i === 1;
      imgArr[i].classList.remove('display-none');
    }
    i--;
  })

  rightBtn.addEventListener('click', event => {
    console.log('brooh');
    if (i !== imgArr.length) {
      imgArr[i].classList.remove('display-none');
      imgArr[i - 1].classList.add('display-none');
    } else {
      imgArr[i].classList.add('display-none');
      i === 1;
      imgArr[i].classList.remove('display-none');
    }
    i++;
  })

  return carousel;
}

const carousels = document.querySelector('.carousel-container');
carousels.append(Carousel());
console.log(Carousel());

