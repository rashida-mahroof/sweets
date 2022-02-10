$(document).ready(function(){





    $('#owl-two').owlCarousel({
        loop:true,
        margin:10,
        video:true,
        nav:true,
        lazyLoad:true,
        autoplay: true,
        dots:false,
        // navContainer: '#navhere5',
        navText: ["<div class='owl-prevs'></div>", "<div class='owl-nexts'></div>"],
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        animateIn: 'fadeIn', // add this
        animateOut: 'fadeOut', // and this
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            560:{
                items:1
            },
            760:{
                items:1
            },
            990:{
                items:1
            },
            1200:{
                items:1
            },
            1500:{
                items:1
            }
        }
    });
    
    
    
    $('#product-slide').owlCarousel({
        loop:true,
        margin:10,
        video:true,
        nav:true,
        lazyLoad:true,
        autoplay:false,
        dots:false,
        slideBy:1,
        navText: ["<div class='owl-prevsp'></div>", "<div class='owl-nextsp'></div>"],
        responsive:{
            0:{
                items:1,
                margin:0,
            },
            480:{
                items:1,
                margin:0,
            },
            560:{
                items:2,
                margin:0,
            },
            760:{
                items:2,
                margin:0,
            },
            990:{
                items:3,
                margin:0,
            },
            1200:{
                items:3,
                margin:0,
            },
            1500:{
                items:3,
                margin:0,
            }
        }
    });
    
    
    });