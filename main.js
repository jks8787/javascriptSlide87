var currentPageI = -1;

// Get Content
var $slideshowContent = $('.slideshow-content');

// Get Nav
var $slideshowNav = $('.slideshow-nav')

// Get the contents children
var pages = $slideshowContent.children();

// Make each child a jquery object
// and create the navigation
pages.each(function(index, domElement){
  var $anchor;

  pages[index] = $(domElement);

  $anchor = $('<a />',{
    class: 'l' + (index + 1)
  });

  // TODO: Put generated anchors in array
  // once this is done, append all anchors at once
  $slideshowNav.append($anchor);
});

var viewsWidth = 200;
var showPage = function(index){
  var currentPage,
      nextPage;

    if(index === currentPageI) {
      return;
    }

    currentPage = pages[currentPageI];

    if(currentPage){
        currentPage.stop().animate({left: -viewsWidth})
    }

    nextPage = pages[index];

    nextPage
        .stop()
        .css({left: viewsWidth})
        .animate({left: 0});

    currentPageI = index;
};

$slideshowNav.on('click', function(e){
  var index = $(e.target).index();

  showPage(index);
});

$('.left-right').
  mouseover(function(){
      $('.slider').stop().animate({
          right: 0
      }, 400);
  }).
  mouseout(function(){
    $('.slider').stop().animate({
        right: '-200px'
    }, 400);
  });

// show default page
showPage(0);
