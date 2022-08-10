//select-boxから任意のものを選択
//valueが同一のもののみ表示
//food-list li  data-category-type

$(function(){
  //クリックしてvalue取得
  $('.select-box').on('change',function(){
    let a = $(this).val(),
    b = $('.food-list li');
    //　条件演算子　allとの比較　正ならリスト全表示、誤ならeach処理
    'all' === a ? b.show(): $.each( b,function(i,e){
      //dataの取得　クリックしたvalueと比較し、条件演算子　同じなら表示
      let d =$(e).data('category-type');
      a === d ? $(e).show() : $(e).hide();
    });
  });
});