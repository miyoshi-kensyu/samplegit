$(function(){
  $('.dropdwn li').hover(function(){
    $(this).find('ul').stop().slideDown();
  },
  function(){
    $(this).find('ul').stop().slideUp();
  });
});