// js/rwd/b_tablet.js

(function($){

  var select = $('.select_show');
  var selectText = select.children('span');

  var selectUl = $('.select_area');
  var selectLi = selectUl.children('li');

  var top = $('.top_btn');


  // language 클릭시 언어 선택창 펼쳐짐
  select.on('click', function(e) {
    if (selectUl.css('display') == 'none') {
      selectUl.slideDown('fast');
    } else {
      selectUl.slideUp('fast');
    }
  }); // select.on('click', ...)

  // 원하는 언어 선택시 그 언어로 'language' 덮어쓰기
  selectLi.on('click', function(e) {
    var li = $(this).text();
    selectText.html(li);
    selectUl.hide();
  }); // selectLi.on('click', ...)


  // 화면을 600px 까지 내리면 top button이 나옴
  $(window).on('scroll', function(e) {

    if($(window).scrollTop() > 600) {
      top.css('display', 'block');
    } else {
      top.css('display', 'none');
    }
  }); // $(window).scroll(...)

  // top버턴 클릭시 top으로 이동
  top.on('click', function(e) {
    $('html').animate({scrollTop: 0}, 500);
  }); // top.on('click', ...)


})(jQuery);