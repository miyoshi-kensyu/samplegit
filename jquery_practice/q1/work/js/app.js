//q1-1　文字色の変更
$('#q1').css('color','#008000');

//q1-2　クリックで背景色変更
$('#q2').on('click',function(){
  $(this).css('background','pink');
});

//q1-3 クリックでフェードアウト
$('#q3').on('click',function(){
  $(this).fadeOut(3000);
});

//q1-4 クリックでボタンの拡大
$('#q4').on('click',function(){
  $(this).addClass('large');
});

//q1-5
$('#q5').on('click',function(){
  $(this).append('DOMの中の後ろ'),
  $(this).prepend('DOMの中の前'),
  $(this).after('DOMの後ろ'),
  $(this).before('DOMの前');
});

//q1-6
$('#q6').on('click',function(){
  $(this).animate({
    "margin-top":100,
    "margin-left":100
  },2000)
});

//q1-7
$('#q7').on('click',function(){
  console.log(this);
});

//q1-8
// $('#q8').on({
//   'mouseenter':function(){
//   $(this).addClass('large');},
//   'mouseleave':function(){
//   $(this).removeClass('large');}
//   });
$('#q8').hover(
  function(){
    $(this).addClass('large');
  },
  function(){
    $(this).removeClass('large');
  }
);

//q1-9
$('#q9 li').on('click',function(){
    var alertQ9 = $(this).index();
    alert(alertQ9);
  });

//q1-10
$('#q10 li').on('click',function(){
  //押下したQ10のliのインデックス番号取得
  var actionQ = $(this).index();
  // console.log(actionQ);
  //console.log($('#q11 li').eq(actionQ));
  //対応する番号のq11 liにクラス追加
  $('#q11 li').eq(actionQ).addClass('large-text');
});