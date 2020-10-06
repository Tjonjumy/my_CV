
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
var liItems=document.querySelectorAll('.slidebar-menu ul li a');
console.log(liItems);
var liItemsArr=Array.from(liItems);
const liItemsArrL=liItemsArr.length;
for(let i=0;i<liItemsArrL;i++){
  if(window.innerWidth<=768){
    liItemsArr[i].addEventListener('click',showMenu);
  }
  liItemsArr[i].addEventListener('click',function(){toElmMenu(i)});
}

// Scroll to an item of Menu 
var contents=document.querySelectorAll('section.content');
var contentsArr=Array.from(contents);
//console.log(contents);
var contentsOffsetTop=[];
contentsArr.forEach((content)=>{
  contentsOffsetTop.push(content.offsetTop);
});
console.log(contentsOffsetTop);
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
  //Rotate toTop
  if(document.body.scrollTop>=20||document.documentElement.scrollTop>=20){
    topTop.style.opacity=0.6;
    deg=document.documentElement.scrollTop ? document.documentElement.scrollTop/5 : document.body.scrollTop/5;
    topTop.style.transform=`rotate(${deg}deg)`;
  }
  else{
    topTop.style.opacity=0;
  }
  //Add active class for menu item
  for(let i=0;i<liItemsArrL-1;i++){
    if(document.documentElement.scrollTop<contentsOffsetTop[i+1]-100
      && document.documentElement.scrollTop>=contentsOffsetTop[i]-100){
      liItemsArr[i].classList.add('active');
    }
    else{
      liItemsArr[i].classList.remove('active');
    }
    if(document.documentElement.scrollTop<contentsOffsetTop[i+1]
      && document.documentElement.scrollTop>=contentsOffsetTop[i]-300){
        contentsArr[i].classList.add('loadweb');
      }
  }
  if(document.documentElement.offsetHeight<=window.innerHeight+document.documentElement.scrollTop){
    liItemsArr[liItemsArrL-1].classList.add('active');
    liItemsArr[liItemsArrL-2].classList.remove('active');
  }
  else{
    liItemsArr[liItemsArrL-1].classList.remove('active'); 
  }
  console.log(document.documentElement.scrollTop);
  //console.log(document.documentElement.offsetHeight-window.innerHeight-document.documentElement.scrollTop);
};
function topFunction(){
  document.body.scrollTop=0; // For Safari
  document.documentElement.scrollTop=0; // For Chrome, Firefox, IE and Opera
}
window.onload=()=>{
  if(document.documentElement.scrollTop<contentsOffsetTop[1]){
    liItemsArr[0].classList.add('active');
  }
};

