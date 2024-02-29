// toggle icon
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick=()=>{
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };



// Menu-Icon
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
});

// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.screenY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(lonks=>{
                links.classList.remove('active');
                document.querySelector('header nav a[herf*='+ id + ']').classList.add('active');
            });
        };
    });
    // sticky navbar
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    //toggle and navbar 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// scroll reveal
ScrollReveal({
    // reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .education-container, .project-box, .project-box, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});

// typed js
const typed = new Typed('.multiple-text',{
    strings:['Java Developer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

//  Contact Email linking 

    function sendEmail(){
        
        Email.send({
        Host : "smtp.gmail.com",
        Username : "afrid2108@gmail.com",
        Password : "Afrid2119",
        To : 'afridpathan1819@gmail.com',
        From : document.getElementById('email').value,
        Subject : "Contact Enquiry ",
        Body : "Name "+ document.getElementById('name').value
                + "<br> Email: " + document.getElementById('email').value
                + "<br> Phone No: " + document.getElementById('phone').value
                + "<br> Message: " + document.getElementById('message').value
    }).then(
    message => alert("Message Send Successfully")
     );

    }
