$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal'); 
    options = [];
    var instances = M.Modal.init(elems, options);
});





