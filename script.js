const cursor=document.querySelector("#cursor")
const blurCursor=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",(dets)=>{
    cursor.style.left=dets.x+"px";
    blurCursor.style.left=dets.x-250+"px";
    cursor.style.top=dets.y+"px";
    blurCursor.style.top=dets.y-250+"px";
})


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor: "black",
    duration:0.5,
    scrollTrigger: {
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -75%",
        scrub:2
    }
})
document.querySelectorAll("#nav h4").forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        cursor.style.scale= "3"
        cursor.style.border="1px solid #fff"
        cursor.style.backgroundColor="transparent"
    })
})
document.querySelectorAll("#nav h4").forEach((elem)=>{
    elem.addEventListener("mouseleave",()=>{
        cursor.style.scale= "1"
        cursor.style.border="0px solid #95c11e"
        cursor.style.backgroundColor="#95c11e"
    })
})
gsap.from("#about,#about-us img",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about,#about-us img",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        stagger:0.5
    }
})
gsap.from("#card,#card div",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#card,#card div",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        stagger:0.5
    }
})
gsap.from("#colon1",{
    y:-50,
    x:-50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 35%",
        end:"top 30%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:50,
    x:50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 35%",
        end:"top 30%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:40,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})

