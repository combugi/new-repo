$(function () {
  var url = location.href
  var category //page1-1

  if (url.match('page1-1')) {
    category = 1 ;
    page=1
  }
  else if(url.match('page1-2')){
    category = 1 ;
    page=2
  }
  else if(url.match('page1-3')){
    category = 1 ;
    page=3
  }
  else if(url.match('page2-1')){
    category = 2 ;
    page=1
  }
  else if(url.match('page2-2')){
    category = 2 ;
    page=2
  }
  else if(url.match('page3-1')){
    category = 3 ;
    page=1
  }
  else if(url.match('page4-1')){
    category = 4 ;
    page=1
  }
  else if(url.match('page5-1')){
    category = 5 ;
    page=1
  }
  else if(url.match('page5-2')){
    category = 5 ;
    page=2
  }
  else if(url.match('page5-3')){
    category = 5 ;
    page=3
  }


  $('.snb .menu' + category).show()
  $('.snb .menu'+ category+"-"+page).addClass('active')
  $(".sub-visual-"+category).fadeIn(10).addClass('active')

  var menutitle=$('.snb .menu'+category+">a").text()
  $(".bread-crumb .menu-title").text(menutitle)

  var pagetitle=$('.snb .menu'+category+'-'+page).text() 
  $(".bread-crumb .page-title").text(pagetitle)

})//ready


/* 이미지크기와 동일하게 유튜브 크기를 설정한다 */