// Navbar animation scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){
navbar.classList.add("scrolled");
}
else{
navbar.classList.remove("scrolled");
}

});


// Animation scroll services

const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});


cards.forEach(card=>{
observer.observe(card);
});


// Parallax hero image

const heroImg = document.querySelector(".hero-right img");

window.addEventListener("mousemove",(e)=>{

let x = (window.innerWidth/2 - e.pageX)/40;
let y = (window.innerHeight/2 - e.pageY)/40;

heroImg.style.transform = `translate(${x}px, ${y}px)`;

});


// Reveal animations

const revealElements = document.querySelectorAll(".project, .step, .logo-box");

const revealObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";
}

});

},{threshold:0.2});


revealElements.forEach(el=>{

el.style.opacity=0;
el.style.transform="translateY(40px)";
el.style.transition="0.6s";

revealObserver.observe(el);

});