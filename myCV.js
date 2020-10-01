//Initial Intro
// window.onload=function(){
//   introElements=document.getElementsByClassName('intro');
//   introElements=Array.from(introElements);
//   console.log(introElements.length);
//   var timeDelay=1000;
//   for(let i=0;i< introElements.length;i++){
//     setTimeout(function(){console.log(introElements[i]);introElements[i].style.top="0";console.log(timeDelay);},timeDelay); 
//     timeDelay+=500;
//   }
//   // for(let i=0;i< introElements.length;i++){
//   //   if()
//   //   introElements[i].style.display="none"; 
//   // }
// };
//Make Circle text
function circularText(txt, radius, classIndex) {
    txt = txt.split(""),
    classIndex = document.getElementsByClassName("circTxt")[classIndex];
    var deg = 360 / txt.length,
      origin = -90;
  
    txt.forEach((ea) => {
      ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
      classIndex.innerHTML += ea;
      origin += deg;
    });
  }

    circularText("ToTop-TuanPham-", 35, 0);
// Scroll To Top
console.log(document.scrollingElement.scrollTop);
var sections=document.querySelectorAll('section[class^="content"]');
var positionSections=[];
Array.from(sections).forEach(function(e){
  let position = e.scrollTop;
  positionSections.push(position);
});
console.log(positionSections);
var test=document.getElementById('education');
console.log(test);

