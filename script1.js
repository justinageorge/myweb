// scrollssections active link

let sections=document.querySelectorAll('section')
let navlinks=document.querySelectorAll('header nav a')

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>=offset && top<offset +height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }
    })
}
// sticky navbar

let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);
menuIcon.classList.toggle('bx-x')
navbar.classList.toggle('active')
// toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')

}
// remove toggle icon and navbar link when click on navbar link

// scroll reveal
document.addEventListener('DOMContentLoaded', function () {
scrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

scrollReveal().reveal('.home-content, .heading', { origin: 'top' });
scrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });})


var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Mathematician"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

