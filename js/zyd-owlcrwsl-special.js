$(document).ready(function(){
    $('#owl-one').owlCarousel({
    loop:false,
    margin:10,
	video:true,
    nav:false,
	lazyLoad:true,
    autoplay:false,
    dots:false,
    navContainer: '#navhere2',
    slideBy: 6,
	autoplayTimeout:2000,
	autoplayHoverPause:true,
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
            items:4
        },
        990:{
            items:5
        },
        1200:{
            items:6
        },
        1500:{
            items:6
        }
    }
});



$('#main-packages').owlCarousel({
    loop:true,
    margin:10,
	video:true,
    nav:false,
	lazyLoad:true,
    autoplay:false,
    dots:false,
    // navContainer: '#navhere2',
	autoplayTimeout:2000,
	autoplayHoverPause:true,
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

    $('#owl-testi').owlCarousel({
    loop:true,
    margin:10,
	video:true,
    nav:false,
	lazyLoad:true,
    autoplay:true,
    dots:false,
	autoplayTimeout:2000,
	autoplayHoverPause:true,
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
            items:2
        },
        990:{
            items:2
        },
        1200:{
            items:2
        },
        1500:{
            items:2
        }
    }
});




$('#owl-three').owlCarousel({
    loop:true,
    margin:20,
	video:true,
    nav:true,
	lazyLoad:true,
    autoplay:true,
    dots:false,
    navContainer: '#navhere2',
	autoplayTimeout:1500,
	autoplayHoverPause:true,
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
            items:2
        },
        1200:{
            items:3
        },
        1500:{
            items:3
        }
    }
});




$('#product-cats').owlCarousel({
    // loop:true,
    // margin:20,
	// video:true,
    // nav:true,
	// lazyLoad:true,
    // autoplay:false,
    // dots:false,
    // navContainer: '#navhere2',
	// autoplayTimeout:1500,
    // autoplayHoverPause:true,
    // slideBy: 3,
    


    loop:false,
    margin:20,
	video:true,
    nav:true,
	lazyLoad:true,
    autoplay:false,
    dots:false,
    navContainer: '#navhere2',
	autoplayTimeout:1500,
    autoplayHoverPause:true,
    slideBy: 6,



    responsive:{
        0:{
            items:1
        },
        480:{
            items:3
        },
        560:{
            items:3
        },
        760:{
            items:4
        },
        990:{
            items:6
        },
        1200:{
            items:6
        },
        1500:{
            items:6
        }
    }
});


$('#owl-for-store-detail').owlCarousel({
    loop:true,
    margin:20,
	video:true,
    nav:false,
	lazyLoad:true,
    autoplay:true,
    dots:false,
    // navContainer: '#navhere2',
	autoplayTimeout:1500,
	autoplayHoverPause:true,
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

$('#owl-for-store-detail-three').owlCarousel({
    loop:true,
    margin:20,
	video:true,
    nav:true,
	lazyLoad:true,
    autoplay:true,
    dots:false,
    navContainer: '#navhere2',
	autoplayTimeout:1500,
	autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:1
        },
        560:{
            items:2
        },
        760:{
            items:2
        },
        990:{
            items:3
        },
        1200:{
            items:3
        },
        1500:{
            items:3
        }
    }
});


$('#owl-for-store-detail-four').owlCarousel({
    loop:true,
    margin:20,
	video:true,
    nav:true,
	lazyLoad:true,
    autoplay:true,
    dots:false,
    navContainer: '#navhere4',
	autoplayTimeout:1500,
	autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:1
        },
        560:{
            items:2
        },
        760:{
            items:2
        },
        990:{
            items:3
        },
        1200:{
            items:4
        },
        1500:{
            items:4
        }
    }
});



$('#owl-for-category1').owlCarousel({
    loop:false,
    margin:20,
	video:true,
    nav:true,
	lazyLoad:true,
    autoplay:false,
    dots:false,
    navContainer: '#navhere4',
	autoplayTimeout:1500,
    autoplayHoverPause:true,
    slideBy: 3,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:1
        },
        560:{
            items:2
        },
        760:{
            items:2
        },
        990:{
            items:3
        },
        1200:{
            items:3
        },
        1500:{
            items:3
        }
    }
});



$('#owl-for-category2').owlCarousel({
    loop:false,
    margin:20,
	video:true,
    nav:true,
	lazyLoad:true,
    autoplay:false,
    dots:false,
    navContainer: '#navherecat',
	autoplayTimeout:1500,
    autoplayHoverPause:true,
    slideBy: 3,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:1
        },
        560:{
            items:2
        },
        760:{
            items:2
        },
        990:{
            items:3
        },
        1200:{
            items:3
        },
        1500:{
            items:3
        }
    }
});


$('#owl-for-category3').owlCarousel({
    loop:false,
    margin:20,
	video:true,
    nav:true,
	lazyLoad:true,
    autoplay:false,
    dots:false,
    navContainer: '#navherearrive',
	autoplayTimeout:1500,
    autoplayHoverPause:true,
    slideBy: 3,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:1
        },
        560:{
            items:2
        },
        760:{
            items:2
        },
        990:{
            items:3
        },
        1200:{
            items:3
        },
        1500:{
            items:3
        }
    }
});



});

