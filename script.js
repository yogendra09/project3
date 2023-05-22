var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });



var tl = gsap.timeline();

tl
.from("#page1>h1",{
    y:0,
    opacity:0,
    duration:1
},"-=")
.from("#one",{
    y:100,
    duration:1,
    opacity:0,
},"-=")
.from("#two",{
    x:100,
    duration:1,
    opacity:0,
},"-=")
.from("#three",{
    y:-100,
    duration:1,
    opacity:0,
},"-=")

gsap.from("#page2>h1",{
    scrollTrigger:{
       trigger:"#page2",
       start:"top 50%",

    },
   y:5,
   y:80,
   opacity:0,
   duration:20,
   opacity:0,
   duration:2
   
})

gsap.from("#page2>p",{
    scrollTrigger:{
       trigger:"#page2",
       start:"top 30%",
      
    },
   y:100,
   opacity:0,
   duration:2
   
})

gsap.from("#page2>h2",{
    scrollTrigger:{
       trigger:"#page2",
       start:"top 10%",      
    },
   y:50,
   opacity:0,
   duration:2
   
})

gsap.from("#page3-part1",{
    scrollTrigger:{
        trigger:"#page3",
        start:"top 50%",
    },
    y:100,
    opacity:0,
    duration:2
})

gsap.from("#page3-part2",{
    scrollTrigger:{
        trigger:"#page3",
        start:"top 40%"
    },
    y:100,
    opacity:0,
    duration:2
})
gsap.from("#page3-bottom h2",{
    scrollTrigger:{
        trigger:"#page3",
        start:"top 20%",
    },
    y:100,
    opacity:0,
    duration:2
})

gsap.from("#page4>h1",{
    scrollTrigger:{
        trigger:"#page4",
        start:"top 60%",
       
    },
    y:60,
    opacity:0,
    duration:2
})
gsap.from("#page4-logo img",{
    scrollTrigger:{
        trigger:"#page4",
        start:"top 40%",
    },
    y:100,
    opacity:0,
    duration:2
})
gsap.from("#page4>h6",{
    scrollTrigger:{
        trigger:"#page4",
        start:"top 10%",
       
    },
    y:60,
    opacity:0,
    duration:2
})

gsap.from("#page5-part1 ,#page5-part2",{
    scrollTrigger:{
        trigger:"#page5",
        start:"top 40%",
      
    },
    y:80,
    opacity:0,
    duration:2
})

gsap.from("h2, #green-effect5 ",{
    scrollTrigger:{
        trigger:"#page5",
        start:"top 10%",
       
    },
    y:80,
    opacity:0,
    duration:2
})

gsap.from( ".swiper-slide",{
    scrollTrigger:{
        trigger:"#page6",
        start:"top 20%",
       
    },
    y:80,
    opacity:0,
    duration:2

})

gsap.from("#page7>img",{
    scrollTrigger:{
        trigger:"#page7",
        start : "top 30%"
    },
    y:50,
    opacity:0,
    duration:2
})

gsap.from("#bc-part1",{
    scrollTrigger:{
        trigger:"#page7",
        start : "top 50%"
    },
    y:80,
    opacity:0,
    duration:2
})
gsap.from("#bc-part2",{
    scrollTrigger:{
        trigger:"#page7",
        start : "top 30%"
    },
    y:80,
    opacity:0,
    duration:2
})

