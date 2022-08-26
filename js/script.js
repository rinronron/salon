/* ハンバーガーメニュー */
$(".openbtn").click(function (){
    $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function(){
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
});

/* ポップのボタンを押すと消える */
$(function () {
  $('.close-btn').on('click', function () {
    $('.pop-wrap').addClass('hidden');
  });
});

/* 一文字ずつ文字を表示 */
function EachTextAnimeControl() {
    $('.move-text').each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("appeartext");
  
      } else {
        $(this).removeClass("appeartext");
      }
    });
  }

$(window).scroll(function() {
    EachTextAnimeControl();
});

$(window).on('load', function () {
    var element = $(".move-text");
    element.each(function () {
      var text = $(this).text();
      var textbox = "";
      text.split('').forEach(function (t, i) {
        if (t !== " ") {
          if (i < 10) {
            textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
          } else {
            var n = i / 10;
            textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
          }
  
        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);
    });
  
    EachTextAnimeControl();
});

/* 画像をふわっと上へ */
AOS.init();