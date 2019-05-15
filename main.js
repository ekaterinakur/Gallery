const bigImg = document.getElementById('bigImg');
const imgList = document.getElementById('imgList');

imgList.onclick = (e) => {
  bigImg.src = e.target.src;
  bigImg.alt = e.target.alt;
}
