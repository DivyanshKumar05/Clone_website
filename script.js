const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let fixedimg = document.querySelector('#fixedimg');
let elem = document.querySelector(".elem_container");

elem.addEventListener('mouseenter', (e)=>{
    fixedimg.style.display = "block";
});
elem.addEventListener('mouseleave', (e)=>{
    fixedimg.style.display = "none";
});

let elems = document.querySelectorAll(".elem");
elems.forEach((e)=>{
    e.addEventListener("mouseenter", ()=>{
        let image = e.getAttribute("data-image");
        fixedimg.style.backgroundImage = (`url(${image})`)
    })
});