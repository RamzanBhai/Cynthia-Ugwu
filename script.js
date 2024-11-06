const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function PageAnimate(){
    let tl=gsap.timeline();
    tl.from("#nav",{
        y:50,
        duration:1.5,
        delay:1,
        opacity:0,
        ease:Expo.easeInOut,
    })
   .from("#heading",{
        y:100,
        duration:1.5,
        delay:0.5,
        opacity:0,   
    })
   .from("#chhotiheadings",{
        y:-50,
        duration:1.5,
        delay:-0.5,
        opacity:0,
    })
   .from("#herofooter",{
        y:30,
        duration:1.5,
        delay:-1,
        opacity:0,
    })
}
function circleMouseflow(){
    window.addEventListener("mousemove", (detail)=>{
     document.querySelector('#minicircle').style.transform=`translate(${detail.clientX}px,${detail.clientY}px)` ;
    })
}
let textElement=document.querySelectorAll(".elem").forEach((elem)=>{
    let rotate=0;
    let diffrot=0;
elem.addEventListener("mousemove",(dets)=>{
  let diff= dets.clientY-elem.getBoundingClientRect().top;
  diffrot=dets.clientX-rotate;
  rotate=dets.clientX;
  gsap.to(elem.querySelector("img"),{
opacity:1,
top:diff,
ease:Power3,
left:dets.clientX,
 rotate:gsap.utils.clamp(-20,20,diffrot),  
  })
  gsap.to(elem.querySelector("h1"), { 
    x: 30,
     duration: 0.9,
     opacity:0.2
 });  
});
elem.addEventListener("mouseleave",(dets)=>{
    gsap.to(elem.querySelector("img"),{
  opacity:0,
  left:0,
    })
    gsap.to(elem.querySelector("h1"), { 
        x: 0,
         duration: 1,
         opacity:1
     });
  });
});
circleMouseflow();
PageAnimate();