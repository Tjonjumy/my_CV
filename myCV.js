
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
//Close Menu when Select from Menu on mobile
var liItems=document.querySelectorAll('.slidebar-menu ul li');
console.log(liItems);
var liItemsArr=Array.from(liItems);
for(let i=0;i<liItemsArr.length;i++){
  if(window.innerWidth<=768){
    liItemsArr[i].addEventListener('click',showMenu);
  }
  liItemsArr[i].addEventListener('click',function(){toElmMenu(i)});
 
}

// Scroll to element of Menu 
var contents=document.querySelectorAll('section.content');
console.log(contents);
var contentsOffsetTop=[];
Array.from(contents).forEach((content)=>{
  contentsOffsetTop.push(content.offsetTop);
});

function toElmMenu(liElement){
  window.innerWidth<=768 ? document.documentElement.scrollTop=contentsOffsetTop[liElement]-35 :
  document.documentElement.scrollTop=contentsOffsetTop[liElement]-20;
}
// Scroll To Top
var topTop=document.getElementById('to-top');
topTop.addEventListener('click',topFunction);
topTop.addEventListener('mouseover',()=>{
  topTop.style.opacity=1;
});
var deg=0;
window.onscroll=function(){
  if(document.body.scrollTop>=20||document.documentElement.scrollTop>=20){
    topTop.style.opacity=0.6;
    deg=document.documentElement.scrollTop ? document.documentElement.scrollTop/5 : document.body.scrollTop/5;
    topTop.style.transform=`rotate(${deg}deg)`;
  }
  else{
    topTop.style.opacity=0;
  }
};
function topFunction(){
  document.body.scrollTop=0; // For Safari
  document.documentElement.scrollTop=0; // For Chrome, Firefox, IE and Opera
}


