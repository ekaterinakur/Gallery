const bigImg = document.querySelector('#bigImg');
const imgList = document.querySelector('#imgList');

imgList.addEventListener('click', (e) => {
  bigImg.src = e.target.src;
  bigImg.alt = e.target.alt;
});
