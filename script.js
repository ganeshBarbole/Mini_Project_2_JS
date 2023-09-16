window.addEventListener("mousemove",(x)=>{
    let rect = document.getElementById("rect")
    let val = gsap.utils.mapRange(
        0,
        window.innerWidth,
        100+rect.getBoundingClientRect().width/2,
        window.innerWidth-(100+rect.getBoundingClientRect().width/2),
        x.clientX)
    gsap.to("#rect",{
        left:val,
        ease:Power3
    })
})