$(function(){
  //クリック
  $('.modal_open_button').on('click',function(){
  //モーダルウィンドウの表示
    $('.modal_win').fadeIn();
  });
$('.modal_close_button').on('click',function(){
  //モーダルウィンドウの非表示
    $('.modal_win').fadeOut();
  });
});