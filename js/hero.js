const heroImage = document.getElementById('parallax-1');
const base = "https://codehard.cz/svatba/images/back";
const bgImageArray = ["2.jpg", "5.jpg", "4.jpg", "6.jpg"];
const secs = 4;

bgImageArray.forEach((el) => {
  new Image().src = base + el;
  // caches images, avoiding white flash between background replacements  
})

function bgSequence() {  
for (var i = 0; i < bgImageArray.length; i++) {
  var k = 0;
  
  setTimeout(() => {
    //console.log(base + bgImageArray[k]);
    heroImage.style.background = `url(${base}${bgImageArray[k]}) no-repeat top
    center/cover`;
    k++
  }, (secs * 1000) *i)
}
}

bgSequence();

setInterval(bgSequence, secs*1000*bgImageArray.length);

