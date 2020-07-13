import './sass/main.scss';




var $testimonialActive = $(".active"),
  $testimonialSlide = $(".testimonial-wrapper"),
  $testPrev = $(".testimonial .prev"),
  $testNext = $(".testimonial  .next");

  function test() {
    TweenMax.set($testimonialSlide.not($testimonialActive), {
      autoAlpha: 0
    });
    TweenMax.set($testPrev, {
      autoAlpha: 0.2
    });
  }

  test();

  function testnext(slideOut, slideIn, slideInAll) {
    var test = new TimelineLite(),
      slideOutContent = slideOut.find('.testimonial-wrapper .text'),
      slideInContent = slideIn.find('.testimonial-wrapper .text'),
      slideOutImg = slideOut.find('.testimonial-wrapper img'),
      slideInImg = slideIn.find('.testimonial-wrapper img'),
      index = slideIn.index(),
      size = $testimonialSlide.length;
    console.log(index);
  
    if (slideIn.length !== 0) {
  
      test
        .set(slideIn, {
          autoAlpha: 1,
          className: '+=active'
        })
        .set(slideOut, {
          className: '-=active'
        })
        .to(slideOutContent, 0.65, {
          y: '+=40px',
          ease: Power3.easeInOut
        }, .5)
        .to(slideOutImg, 0.65, {
          backgroundPosition: 'bottom',
          ease: Power3.easeInOut
        }, 0)
        .to(slideInAll, 1, {
          y: '-=100%',
          ease: Power3.easeInOut
        }, 0)
        .fromTo(slideInContent, 0.65, {
          y: '-=120px'
        }, {
          y: 0,
          ease: Power1.easeInOut
        }, "-=0.7")
        .fromTo(slideInImg, 0.65, {
          backgroundPosition: 'top'
        }, {
          backgroundPosition: 'bottom',
          ease: Power3.easeInOut
        }, "-=0.7")
    }
  
    TweenMax.set($testPrev, {
      autoAlpha: 1
    });
  
    if (index === size - 1) {
      TweenMax.to($testNext, 0.3, {
        autoAlpha: 0.2,
        ease: Linear.easeNone
      });
    }
  };

  $testNext.click(function (e) {
    e.preventDefault();
  
    var slideOut = $('.testimonial-wrapper.active'),
      slideIn = $('.testimonial-wrapper.active').next('.testimonial-wrapper'),
      slideInAll = $('.testimonial-wrapper');
  
    testnext(slideOut, slideIn, slideInAll);
  });


  function testprev(slideOut, slideIn, slideInAll) {
    var tl = new TimelineLite(),
      slideOutContent = slideOut.find('.testimonial-wrapper .text'),
      slideInContent = slideIn.find('.testimonial-wrapper .text'),
      slideOutImg = slideOut.find('.testimonial-wrapper img'),
      slideInImg = slideIn.find('.testimonial-wrapper img'),
      index = slideIn.index(),
      size = $testimonialSlide.length;
  
    if (slideIn.length !== 0) {
  
      tl
        .set(slideIn, {
          autoAlpha: 1,
          className: '+=active'
        })
        .set(slideOut, {
          className: '-=active'
        })
        .to(slideOutContent, 0.65, {
          y: '-=10px',
          ease: Power3.easeInOut
        }, .5)
        .to(slideOutImg, 0.65, {
          backgroundPosition: 'top',
          ease: Power3.easeInOut
        }, 0)
        .to(slideInAll, 1, {
          y: '+=100%',
          ease: Power3.easeInOut
        }, 0)
        .fromTo(slideInContent, 0.65, {
          y: '+=120px'
        }, {
          y: 0,
          ease: Power1.easeInOut
        }, "-=0.7")
        .fromTo(slideInImg, 0.65, {
          backgroundPosition: 'bottom'
        }, {
          backgroundPosition: 'top',
          ease: Power3.easeInOut
        }, "-=0.7")
    }
  
    TweenMax.set($testNext, {
      autoAlpha: 1
    });
  
    if (index === 0) {
      TweenMax.to($testPrev, 0.3, {
        autoAlpha: 0.2,
        ease: Linear.easeNone
      });
    }
  };
  
  $testPrev.click(function (e) {
    e.preventDefault();
  
    var slideOut = $('.testimonial-wrapper.active'),
      slideIn = $('.testimonial-wrapper.active').prev('.testimonial-wrapper'),
      slideInAll = $('.testimonial-wrapper');
  
    testprev(slideOut, slideIn, slideInAll);
  });

  
  




var $activeSlide = $(".active"),
  $homeSlide = $(".gallery-wrapper"),
  $slideNavPrev = $(" .gallery .prev"),
  $slideNavNext = $(" .gallery .next");

function init() {
  TweenMax.set($homeSlide.not($activeSlide), {
    autoAlpha: 0
  });
  TweenMax.set($slideNavPrev, {
    autoAlpha: 0.2
  });
}

init();

function goToNextSlide(slideOut, slideIn, slideInAll) {
  var tl = new TimelineLite(),
    slideOutContent = slideOut.find('gallery-wrapper .img-text'),
    slideInContent = slideIn.find('gallery-wrapper .img-text'),
    slideOutImg = slideOut.find('gallery-wrapper video'),
    slideInImg = slideIn.find('gallery-wrapper video'),
    index = slideIn.index(),
    size = $homeSlide.length;
  console.log(index);

  if (slideIn.length !== 0) {

    tl
      .set(slideIn, {
        autoAlpha: 1,
        className: '+=active'
      })
      .set(slideOut, {
        className: '-=active'
      })
      .to(slideOutContent, 0.65, {
        y: '+=40px',
        ease: Power3.easeInOut
      }, .5)
      .to(slideOutImg, 0.65, {
        backgroundPosition: 'bottom',
        ease: Power3.easeInOut
      }, 0)
      .to(slideInAll, 1, {
        y: '-=110%',
        ease: Power3.easeInOut
      }, 0)
      .fromTo(slideInContent, 0.65, {
        y: '-=120px'
      }, {
        y: 0,
        ease: Power1.easeInOut
      }, "-=0.7")
      .fromTo(slideInImg, 0.65, {
        backgroundPosition: 'top'
      }, {
        backgroundPosition: 'bottom',
        ease: Power3.easeInOut
      }, "-=0.7")
  }

  TweenMax.set($slideNavPrev, {
    autoAlpha: 1
  });

  if (index === size - 1) {
    TweenMax.to($slideNavNext, 0.3, {
      autoAlpha: 0.2,
      ease: Linear.easeNone
    });
  }
};

$slideNavNext.click(function (e) {
  e.preventDefault();

  var slideOut = $('.gallery-wrapper.active'),
    slideIn = $('.gallery-wrapper.active').next('.gallery-wrapper'),
    slideInAll = $('.gallery-wrapper');

  goToNextSlide(slideOut, slideIn, slideInAll);
});

function goToPreviousSlide(slideOut, slideIn, slideInAll) {
  var tl = new TimelineLite(),
    slideOutContent = slideOut.find('.gallery-wrapper .img-text'),
    slideInContent = slideIn.find('gallery-wrapper .img-text'),
    slideOutImg = slideOut.find('gallery-wrapper video'),
    slideInImg = slideIn.find('gallery-wrapper video'),
    index = slideIn.index(),
    size = $homeSlide.length;

  if (slideIn.length !== 0) {

    tl
      .set(slideIn, {
        autoAlpha: 1,
        className: '+=active'
      })
      .set(slideOut, {
        className: '-=active'
      })
      .to(slideOutContent, 0.65, {
        y: '-=10px',
        ease: Power3.easeInOut
      }, .5)
      .to(slideOutImg, 0.65, {
        backgroundPosition: 'top',
        ease: Power3.easeInOut
      }, 0)
      .to(slideInAll, 1, {
        y: '+=110%',
        ease: Power3.easeInOut
      }, 0)
      .fromTo(slideInContent, 0.65, {
        y: '+=120px'
      }, {
        y: 0,
        ease: Power1.easeInOut
      }, "-=0.7")
      .fromTo(slideInImg, 0.65, {
        backgroundPosition: 'bottom'
      }, {
        backgroundPosition: 'top',
        ease: Power3.easeInOut
      }, "-=0.7")
  }

  TweenMax.set($slideNavNext, {
    autoAlpha: 1
  });

  if (index === 0) {
    TweenMax.to($slideNavPrev, 0.3, {
      autoAlpha: 0.2,
      ease: Linear.easeNone
    });
  }
};

$slideNavPrev.click(function (e) {
  e.preventDefault();

  var slideOut = $('.gallery-wrapper.active'),
    slideIn = $('.gallery-wrapper.active').prev('.gallery-wrapper'),
    slideInAll = $('.gallery-wrapper');

  goToPreviousSlide(slideOut, slideIn, slideInAll);
});

function scrollAppear() {
  var tl = new TimelineLite()
  var contactText = document.querySelector(".contact");
  var contactPosition = contactText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.2;


  if (contactPosition <= screenPosition) {
    tl.to('.contact .contact-container', 2, {
      yPercent : 0,
      opacity: 1,
      stagger: .2,
      delay: 1,
    }, '-=1')
  } else {
    tl.to('.contact .contact-container', 1, {
      yPercent: 7,
      opacity: 0,
      stagger: .2,
      delay: 0,
    }, '-=1')
  }


}

window.addEventListener('scroll', scrollAppear);


document.addEventListener('DOMContentLoaded', () => {
  let controller = new ScrollMagic.Controller();
  

  let timeline = new TimelineMax();
  timeline
    .from('.team-wrapper .creative:nth-of-type(1)', 2, {
      top: '70px',
      opacity: 0,
      ease: 'none',
      autoAlpha: 0,
    }, '-=2')
    .from('.team-wrapper .creative:nth-of-type(2)', 2, {
      bottom: '70px',
      opacity: 0,
      ease: 'none',
      autoAlpha: 0,
    }, '-=2')
    .from('.team-wrapper .creative:nth-of-type(3)', 2, {
      bottom: '70px',
      opacity: 0,
      ease: 'none',
      autoAlpha: 0,
    }, '-=2')
    .from('.team-wrapper .creative:nth-of-type(4)', 2, {
      top: '70px',
      opacity: 0,
      ease: 'none',
      autoAlpha: 0,
    }, '-=2')

  let scene = new ScrollMagic.Scene({
      triggerElement: '.team',
      duration: '200%',
      triggerHook: 0,
      pin: true,
    })
    .setTween(timeline)
    .setPin('.team')
    .addTo(controller);
})
document.addEventListener('DOMContentLoaded', () => {
  let controller = new ScrollMagic.Controller();

  let abouttl = new TimelineMax();
  abouttl
    .from('.about .about-container', 2, {
      top: '70px',
      opacity: 0,
      ease: 'none',
      autoAlpha: 0,
    }, '-=2')
    .from('.about svg', 2, {
      transform: 'translatex(-200px)',
      opacity: 0,
      ease: 'none',
      autoAlpha: 0,
    }, '-=2')
    .from('.about .container .container-fluid .img3', 2, {
      transform: 'skewx(20deg)',
      xPercent: 20,
      opacity: 0,
      ease: 'none',
      autoAlpha: 0,
    }, '-=1')
    .from('.about .container .container-fluid .img-left', 2, {
      transform: 'skewx(20deg)',
      xPercent: 20,
      opacity: 0,
      ease: 'none',
      autoAlpha: 0,
    }, '-=1')



  let scene = new ScrollMagic.Scene({
      triggerElement: '.about',
      duration: '200%',
      triggerHook: 0,
      pin: true,
      scrub: true,
    })
    .setTween(abouttl)
    .setPin('.about')
    .addTo(controller);
})



var header = $('.globNav');
var customMenu = $('.custom-menu');

    if(customMenu.length){

        var btnMenu = $('*[toggle-menu]');
        var duration = 1;
        var menuImage = $('.menu-image img');
        var menuOverlayImage = $('.menu-image .overlay-image');
        var menuLinks = $('.custom-menu ul li a');
        var other = $('.navigation .custom-menu .menu-container .other ul  ');
        var menuLinksHeight = menuLinks.outerHeight();

        var menuToggle = new TimelineMax({pause:true});
        menuToggle.set(menuLinks, { y: menuLinksHeight});       
        menuToggle.to(customMenu, duration / 2, {
            width:'100%',
            ease:Power3.easeInOut,
        });
        menuToggle.to(".trans1", 0.2, {left: '0%',ease: Expo.easeInOut, delay: 0});
     
        menuToggle.to(".trans2", 0.2, {left: '0%',ease: Expo.easeInOut, delay: 0});
        
        menuToggle.to(menuOverlayImage, duration, {
            width: 0,
            ease: Power3.easeInOut,
        }); 
        menuToggle.to(menuImage, duration, {
            scale: 1,
            ease: Power3.easeInOut,
        }, '-=' + duration);
        menuToggle.staggerTo(menuLinks, duration, {
            y:0,
            opacity:1,
            ease: Power3.easeInOut,
        }, 0.09, '-=' + duration);
        menuToggle.staggerTo(other, duration, {
            y:15,
            opacity:1,
            delay: .5,
            ease: Power3.easeInOut,
        }, 0.5, '-=' + duration);


        

        menuToggle.reverse();

        function toggleMenu() {
            menuToggle.reversed( !menuToggle.reversed() );
        }

        btnMenu.on('click', function(){
            toggleMenu();
            btnMenu.toggleClass('active');
            customMenu.toggleClass('active');
        });
    }

    $(document).on('click', ' .custom-menu ul li a', function(){
      menuToggle.reverse();
      $('.custom-menu').toggleClass('active');
      btnMenu.toggleClass('active');
  })

//open socialLinks in new tab


  let socialLinks = document.querySelectorAll('.social .icons a');
  let socialLink = document.querySelectorAll( '.online a');
socialLinks.forEach(link => {
    link.target = '_blank';
});
socialLink.forEach(link => {
    link.target = '_blank';
});






