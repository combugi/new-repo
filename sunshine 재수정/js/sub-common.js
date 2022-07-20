$(function () {
  var url = location.href
  var category  //page1-1

  if (url.match('page1-1')) {
    category = 1; page = 1
  } else if (url.match('page1-2')) {
    category = 1; page = 2
  } else if (url.match('page1-3')) {
    category = 1; page = 3
  } else if (url.match('page2-1')) {
    category = 2; page = 1
  } else if (url.match('page2-2')) {
    category = 2; page = 2
  } else if (url.match('page3-1')) {
    category = 3; page = 1
  } else if (url.match('page4-1')) {
    category = 4; page = 1
  } else if (url.match('page5-1')) {
    category = 5; page = 1
  } else if (url.match('page5-2')) {
    category = 5; page = 2
  } else if (url.match('page5-3')) {
    category = 5; page = 3
  }

  $('.snb .menu' + category).show()
  $('.snb .menu' + category + '-' + page).addClass('active')
  $('.sub-visual-' + category).fadeIn(0).addClass('active')
  var menuTitle = $('.snb  .menu' + category + '>a').text()
  $('.bread-crumb .menu-title').text(menuTitle)
  var pageTitle = $('.snb .menu' + category + '-' + page).text()
  $('.bread-crumb .page-title').text(pageTitle)


  function youtuberesize() {
  var imgw = $('.sub-visual .ratio-img').innerWidth()
  var imgh = $('.sub-visual .ratio-img').innerHeight()
  $('.sub-visual iframe').width(imgw)
  $('.sub-visual iframe').height(imgh)
  }//fn

  $(window).load(function(){
      youtuberesize()
  })
  $(window).resize(function () {
    youtuberesize()
  })


setTimeout(function(){
  $('.sub-visual .youtube-container').addClass('active')
},2000)

})//ready

/* 이미지크기와 동일하게 유튜브 크기를 설정한다 */
