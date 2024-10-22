let list = document.querySelectorAll('.sci li');
let bg = document.querySelector('.socialMedia');

VanillaTilt.init(document.querySelectorAll(".sci li a"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
});

list.forEach(elements => {
    elements.addEventListener('mouseenter', function
    (event){
        let color = event.target.getAttribute('data-color');
        bg.style.backgroundColor = color ; 
    })
    elements.addEventListener('mouseleave', function
    (event){
        bg.style.backgroundColor = '#fff' ; 
    })
})