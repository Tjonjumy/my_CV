
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

// show/hide Menu Bar
var barBtn=document.getElementById('barbtn');
var layerMenu=document.getElementById('layerMenu');
barBtn.addEventListener('click',showMenu);
layerMenu.addEventListener('click',showMenu);
function showMenu(){
  var menu=document.getElementById('slidebar');
  var menuLeft=window.getComputedStyle(menu).getPropertyValue('left');
  if(menuLeft=='-200px'){
    menu.style.left=0;
    barBtn.classList.add('activemenu');
    layerMenu.classList.add('show-layer');
  }
  else{
    menu.style.left="-200px";
    barBtn.classList.remove('activemenu'); 
    layerMenu.classList.remove('show-layer');
  }
}
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

