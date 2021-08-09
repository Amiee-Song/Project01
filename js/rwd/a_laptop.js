// js/rwd/a_laptop.js

(function($){

  var select = $('.select_show');
  var selectText = select.children('span');

  var selectUl = $('.select_area');
  var selectLi = selectUl.children('li');

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


})(jQuery);