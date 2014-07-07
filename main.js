// Slider Engine
var curIndex = -1;

// Get Content
var $slideshowContentList = $('.slideshow-content-list');

// Get the contents children
var pages = $slideshowContentList.children();

// Make each child a jquery object
pages.each(function(index, domElement){
  pages[index] = $(domElement);
});

var viewsWidth = 200;
var showNexSlide = function(index){
  var currentPage,
  nextPage
  index = curIndex;

  if (curIndex === -1) {
    index = 0;
  }

  currentPage = pages[index];

  if(currentPage){
      currentPage.stop().animate({
        left: -viewsWidth
      })
  }

  nextPage = pages[index];

  nextPage
      .stop()
      .css({
        left: viewsWidth
      })
      .animate({
        left: 0
      });

  curIndex = ++index;
};


// Navigation Engine
var $slideshowContent = $('.slideshow-content');

$slideshowContent.on('click', 'a', function(){
  showNexSlide();
});

// show default page
showNexSlide();
