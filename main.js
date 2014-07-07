$(document).ready(function(){
    var currentPageI = -1;
    var pages = [
        $('div.l1'),
        $('div.l2'),
        $('div.l3'),
    ];
    var viewsWidth = 200;
    var showPage = function(index){
        if(index === currentPageI){return;}
        var currentPage = pages[currentPageI];
        if(currentPage){
            currentPage.stop().animate({left: -viewsWidth})
        }
        var nextPage = pages[index];
        nextPage
            .stop()
            .css({left: viewsWidth})
            .animate({left: 0})
        currentPageI = index;
    }
    // show default page
    showPage(0);
    $('a.l1').click(showPage.bind(null, 0));
    $('a.l2').click(showPage.bind(null, 1));
    $('a.l3').click(showPage.bind(null, 2));

    $('.left-right').mouseover(function(){
        $('.slider').stop().animate({
            right: 0
        }, 400);
    }).mouseout(function(){
        $('.slider').stop().animate({
            right: '-200px'
        }, 400);
    });

});
