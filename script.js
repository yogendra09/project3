const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function slideeffect(){
    document.querySelectorAll(".slides").forEach(function(slide){

        slide.addEventListener("mousemove",function(dets){
            var dim = slide.getBoundingClientRect();
           slide.children[1].style.clipPath = `circle(20% at ${dets.clientX-dim.left}PX  ${dets.clientY-dim.top}px)`;
        })
    
        slide.addEventListener("mouseleave",function(dets){
            var dim = slide.getBoundingClientRect();
            slide.children[1].style.clipPath = `circle(0% at ${dets.clientX-dim.left}PX  ${dets.clientY-dim.top}px)`;
         })
    })
}


function skewmaker(){

    var dimen = document.querySelector(".slides").getBoundingClientRect();
    var prev = dimen.left;

    document.querySelector("#block").addEventListener("scroll",function(){
      
        var dimen2=document.querySelector(".slides").getBoundingClientRect();
        var diff = prev - dimen2.left;
        prev=dimen2.left;

          document.querySelectorAll(".slides").forEach(function(elem){
            
            elem.style.transform = `skew(${diff*0.11}deg)`
           
          })       
    })




}








skewmaker();

slideeffect();