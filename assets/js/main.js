(function($) {

$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});
	
// hdr-cart-toggle-menu
 

/**
Responsive on 767px
*/
var windowWidth = $(window).width();
// if (windowWidth <= 767) {

  $('.toggle-btn').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.toggle-bar ul').slideToggle(500);
  });


// }

//header-menu
if( $('.nav-opener').length ){
  $('.nav-opener').on('click', function(){
    $('.hdr-nav').slideToggle(500);
    $(this).toggleClass('nav-opener-active');
  });
};


//matchHeightCol
if($('.mHc').length){
  $('.mHc').matchHeight();
};

//Fixed header
/*
window.onscroll = function(){
  scrollFunction()
};
function scrollFunction(){
  var windowWidth = $(window).width();  
  if(document.body.scrollTop>800||document.documentElement.scrollTop>800){
    $("body").addClass('fxd-hdr');
  }else{
    $("body").removeClass('fxd-hdr');
  }
}
*/

// Search Pop-Up
$('.header-search-btn > button').on('click', function(){
  $('#header-popups').addClass('opacity-1');
  $('body').css('overflow','hidden');
});

$('.popup-cross').on('click', function(){
  $('#header-popups').removeClass('opacity-1');
  $('body').css('overflow','initial');
});


//banner animation

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('.animate-banner').css({
    '-webkit-transform' : 'scale(' + (1 + scroll/2000) + ')',
    '-moz-transform'    : 'scale(' + (1 + scroll/2000) + ')',
    '-ms-transform'     : 'scale(' + (1 + scroll/2000) + ')',
    '-o-transform'      : 'scale(' + (1 + scroll/2000) + ')',
    'transform'         : 'scale(' + (1 + scroll/2000) + ')'
  });
});



//pop-up
if( $('.style-book-sec').length ){


/*if (windowWidth < 768) {
  $(document).on('click','.style-book-lft',function(){
    $('.pop-up-product-lft').addClass('show-popup-lft');
    $('.style-book-slider').addClass('slick-prev-z');
    $('.pop-up-product-rgt').removeClass('show-popup-rgt'); 
  });

$(document).on('click','.style-book-rgt',function(){
    $('.pop-up-product-rgt').addClass('show-popup-rgt');
    $('.style-book-slider').addClass('slick-next-z');
    $('.pop-up-product-lft').removeClass('show-popup-lft');
  });
}*/

  $('.style-book-lft').on('click', function(){ 
    $('.pop-up-product-lft').addClass('show-popup-lft');
    $('.style-book-slider').addClass('slick-prev-z');
    $('.pop-up-product-rgt').removeClass('show-popup-rgt'); 
  });

  $('.style-book-rgt').on('click', function(){ 
    $('.pop-up-product-rgt').addClass('show-popup-rgt');
    $('.style-book-slider').addClass('slick-next-z');
    $('.pop-up-product-lft').removeClass('show-popup-lft');
  });




$(document).on('click','.close-popup-lft',function(){
    $('.pop-up-product-lft').removeClass('show-popup-lft');
    $('.style-book-slider').removeClass('slick-prev-z');
  });

$(document).on('click','.close-popup-rgt',function(){
    $('.pop-up-product-rgt').removeClass('show-popup-rgt');    
    $('.style-book-slider').removeClass('slick-next-z');
  });

};



if (windowWidth < 768) {
  if ($('.btn-767 button').length) {
    $('.btn-767 button').on('click', function(){
      $('.login-signin-sidebar').slideToggle(300);
      $(this).toggleClass('active');
    });
  }
}


//products counter
if( $('.qty').length ){
  $('.qty').each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.plus'),
      btnDown = spinner.find('.minus'),
      min = 1,
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

}
  


// http://codepen.io/norman_pixelkings/pen/NNbqgG
// https://stackoverflow.com/questions/38686650/slick-slides-on-pagination-hover


//$("[data-fancybox]").fancybox({});



/**
Slick slider
*/
if( $('.responsive-slider').length ){
    $('.responsive-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}

//product slider
if( $('.product-big-view-slider').length ){
  $('.product-big-view-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 300,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.product-thumb-view-slider'
  });

}

if( $('.product-thumb-view-slider').length ){
  $('.product-thumb-view-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    speed: 300,
    asNavFor: '.product-big-view-slider',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

}

if( $('.front-page-banner').length ){
  $('.front-page-banner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  speed: 700,
  arrows: false,
  fade: true,
  dots: true,
  autoplay:true,
  autoplaySpeed: 4000
  });  
}

if( $('.style-book-slider').length ){
  $('.style-book-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 700,
    arrows: true,
    fade: true,
    dots: false,   
    // responsive: [
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         arrows: false,
    //         dots: true
    //       }
    //     }
    //   ]
  });  
}

// if( $('.summer-collection-slider').length ){
//   $('.summer-collection-slider').slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     infinite: true,
//     arrows: true,
//     fade: true,
//     dots: false
//   });  
// }




if( $('a.btm-des-down-lnc').length ){
  $("a.btm-des-down-lnc").click(function(e) {
    e.preventDefault();
    var goto = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(goto).offset().top - 20
    }, 800);
  });
};


  
/*
--------------
Start checkout
------------
*/

$('.odr-clk-btn button').on('click', function(){
    $(this).toggleClass('btn-expend');
    $('.product-item').slideToggle(500);
  });

$('.odr-sumry-btn-clk button').on('click', function(){
    $(this).toggleClass('odr-btn-expend');
    $('.product-des-innr').slideToggle(500);
  });


$('.view-dtls').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.view-clr-clk ul').slideToggle(500);
  });

$('.odr-view-dtls').on('click', function(){
  $(this).toggleClass('menu-odr-expend');
  $('.view-odr-clr-clk ul').slideToggle(500);
});

$("input[name='paymethod']").each( function (){
    if($(this).prop('checked') == true){
        $(this).parent().find('.toggleit').fadeIn();
        console.log( $(this).val() );
    }
});
function paymethod(){
  $('.cashondelivery, .paypal, .bankcc').hide();
  var value = $( 'input[name=paymethod]:checked' ).val();
  if( value == 'cashondelivery' )
    $('.cashondelivery').fadeIn();
  if( value == 'paypal' )
    $('.paypal').fadeIn();
  if( value == 'bankcc' )
    $('.bankcc').fadeIn();
}
paymethod();

$("input[name='paymethod']").change(function(){
  paymethod();
});

$("input[name='sameaddress']").on('change', function(){
  
  if ( $(this).is(':checked') ) {
    $(this).parents('.cashondelivery').find('.address-dsc').show();
    $(this).parents('.cashondelivery').find('.account-form').hide();
  }else{    
    $(this).parents('.cashondelivery').find('.address-dsc').hide();
    $(this).parents('.cashondelivery').find('.account-form').show();
  }
});

$('#afcencel').on('click', function(e){
  e.preventDefault();
  $("input[name='sameaddress']").prop('checked', true);
  $('.address-dsc').show();
  $('.account-form').hide();
});

$('.apply-discount-innr span.disc-code').on('click', function(){
  $(this).toggleClass('ds-btn-expend');
  $('.submit-fields').slideToggle(500);
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

if( $('#shipping').length ){
  $('#shipping').validator().on('submit', function (e) {
    if (e.isDefaultPrevented()) {
     
      $('#shipping').hide();
      $('#payment').fadeIn();
      $('#shipto, #shipmethod').fadeIn();
      $('.tab-btn-wrp').removeClass('step1').addClass('step2');
    } else {
      e.preventDefault();
      
      $('#shipping').hide();
      $('#payment').fadeIn();
      $('#shipto, #shipmethod').fadeIn();
      $('.tab-btn-wrp').removeClass('step1').addClass('step2');
      
    }
  });
}

$('.order-history-item-des').slideUp();
$('.order-history-item-tab').on('click', function(e){
  e.preventDefault();
  $(this).toggleClass('order-history-tab-active');
  $(this).parent().find('.order-history-item-des').slideToggle(300);
  $(this).parent().siblings().find('.order-history-item-des').slideUp(300);
  $(this).parent().siblings().find('.order-history-item-tab').removeClass('order-history-tab-active');
});



/*
------
End checkout
------
*/

$('.busket-apply-discount').on('click', function(){
  $(this).next('.bdcode').slideToggle(300);
  $(this).toggleClass('active');
});



/*cart page*/

$('.calculate-taxes-heading').on('click', function(e){
  e.preventDefault();
  $(this).toggleClass('cart-item-summary-prices-expend');
  $('.cart-item-summary-prices').slideToggle(500);
});

if( $('#h-cart').length ){
  $('#h-cart').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('thisactive');
      $('.hdr-cart-toggle-menu').slideToggle(300);
  });

}


new WOW().init();

})(jQuery);







// sticky menu

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("sticky-menu");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

