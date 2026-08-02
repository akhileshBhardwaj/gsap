var main= document.querySelector("#main")
var cursor=document.querySelector("#cursor")
var imageDiv=document.querySelector('#image')

main.addEventListener("mousemove", function(e){
    gsap.to(cursor, {
        x:e.x,
        y:e.y,
       // ease: "back.out",
    })
})

imageDiv.addEventListener("mouseenter", function(){
    cursor.innerHTML="view more"
    gsap.to(cursor,{
        scale:2
    })
})
imageDiv.addEventListener("mouseleave", function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1
    })
})