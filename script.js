window.addEventListener("scroll", function() {
  let header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
})

function imageSrc(source) {
  let mainImage = document.getElementById("img-preview");
  let bodyImage = document.querySelector('.container');
  let header = document.querySelector('.sticky');


  mainImage.src = source;

  if(source == 'img1.png') {
    bodyImage.style.backgroundColor = "#565246";
  } else if(source == 'img2.png'){
    bodyImage.style.backgroundColor = "#3B0505"
  } else if(source == 'img3.png') {
    bodyImage.style.backgroundColor = "#051D29"
  } else if(source == 'img4.png') {
    bodyImage.style.backgroundColor = "#40412F"
  } else if(source == 'img5.png'){
    bodyImage.style.backgroundColor = "#F9E3A9"
  } else if(source == 'img6.png'){
    bodyImage.style.backgroundColor = "#6A2B0A"
  } else if(source == 'img7.png'){
    bodyImage.style.backgroundColor = "#5BBCE6"
  } else if(source == 'img8.png'){
    bodyImage.style.backgroundColor = "#F7C252"
  } else if(source == 'img9.png'){
    bodyImage.style.backgroundColor = "#927A92"
  } else {
    bodyImage.style.backgroundColor = "#fff"
  }
}