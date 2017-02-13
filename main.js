$(document).ready(function() {

  var changed = false;
  var handler = true;

  var menuicon = $('#menuicon');
  var navcontainer = $('.navcontainer');
  var scrollElement = $('.herocontainer');
  var woticon = $('.woticon');
  var header = $('.header');
  var a =$('a');

  var scrolltop = 0;


  function checkSize(){
    console.log($(window).width());

    if($(window).width() >= 1024){
      menuicon.off();
      menuicon.hide();
      navcontainer.show();
      handler = false;
    }else{
      navcontainer.hide();

      if(!handler){
        menuicon.click(function(){
            navcontainer.slideToggle();
        });
        menuicon.show();
        handler = true;
      }
    }
  }

  $(window).bind( "scroll", function(e) {
    // When the window is scrolled, update the scroll position output
    scrolltop = $(window).scrollTop();
    console.log(handler, scrolltop);
    if(handler !== false)
      return;
    else if(scrolltop !== 0 && changed === false){
      header.css({'background-color': 'white'});
      woticon.css("background-image", "url('img/wot-logo-dark.svg')");
      a.css("color", "#6A787C");
      changed = true;
    }else if(scrolltop === 0 && changed === true){
      header.css('background-color', 'transparent');
      a.css("color", "white");
      woticon.css("background-image", "url('img/title_wideopentech.png')");

      changed = false;
    }

  });


  menuicon.click(function(){
      navcontainer.slideToggle();
  });

  checkSize();

  $(window).resize(checkSize);


});
