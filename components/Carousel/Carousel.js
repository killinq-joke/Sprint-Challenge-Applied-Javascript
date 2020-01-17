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



  carousel.append(leftBtn);
  carousel.append(img1);
  carousel.append(img2);
  carousel.append(img3);
  carousel.append(img4);
  carousel.append(rightBtn);

  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');

  rightBtn.classList.add('right-button');

  leftBtn.textContent = '<';
  img1.src = "./assets/carousel/mountains.jpeg";
  img2.src = "./assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";
  rightBtn.textContent = '>';

  
  const carouselImgs = [img1, img2, im3, img4];

  const totalImgs = carouselImgs.length;

  let i = 0;

  console.log(carouselImgs);
  //  carouselImgs.forEach((img) => {
  //   img.style.display = 'none';
  // });
  // carouselImgs[i].style.display = 'block';

  // const changeImg = (changeIndex) => {
    
    
  //   console.log(i)
  //   if (i === 0 && changeIndex === -1) {
  //       i = totalImgs - 1; 
  //   } else if (i === (totalImgs - 1) && changeIndex === 1) {
  //     i = 0;
  //   } else {
  //       i += changeIndex;
  //   }
  // }

  leftBtn.addEventListener('click',  () => changeImg(-1));
  rightBtn.addEventListener('click', () => changeImg(1));

  return carousel;
}

const carousels = document.querySelector('.carousel-container');
carousels.append(Carousel());
console.log(Carousel());

