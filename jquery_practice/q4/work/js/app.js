$(function(){
  $('.nav li').on('click',function(){
    let q4 = $('nav li').index(this);
    $('description li').addClass('is-hidden');
    $('description li').eq(q4).removeClass('is-hidden');
  });
});