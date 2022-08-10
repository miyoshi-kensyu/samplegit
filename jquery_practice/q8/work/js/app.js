//検索を押したときの処理
$(function(){
  //pageCountの初期値は1
  let pageCount = 1;
  let sameWord = "";
  $('.search-btn').on('click',function(){
    //入力されたものをsearchWordに代入
    let searchWord = $('#search-input').val();
    //同じ検索ワードで検索を⾏う場合は、pageCountに+1する
    if(searchWord === sameWord){
      pageCount ++;
    }else{
      //違う検索ワードの場合は1に戻す/状態も戻す
      pageCount = 1 ;
      $('lists').empty();
      sameWord = searchWord;
    }
    //通信先の設定
  const settings = {
    "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
    "method": "GET",
  }
  //ajax通信の分岐　done　fail
  $.ajax(settings).done(function (response) {
    const result = response['@graph'];
    displayResult(result)
  }).fail(function (err) {
    displayError(err)
  });
  });
  // 通信成功、表示
  function displayResult (res){
    $('.message').remove();
    if(res[0].items != undefined || res[0].items.length != 0){
      $.each(res[0].items,function(index){
        let title = res[0].items[index].title;
        let creator = res[0].items[index]["dc:creator"];
        let publisher = res[0].items[index]["de:publisher"];
        let id = res[0].items[index]["@id"];
        //undefinedの時の表示
        title == undefined ? title = "タイトル不明" : title;
        creator == undefined ? creator = "作者不明" : creator;
        publisher == undefined ? publisher = "出版社不明" : publisher;
        let listItems =
        `<li class = "lists-item">
          <div class = "list-inner">
            <p>タイトル：${title}</p>
            <p>作者：${creator}</p>
            <p>出版社：${publisher}</p>
            <a href = "${id}" target="_blank">書籍情報</a>
          </div>
        </li>`;
        //リストの表示
        $(".lists").prepend(listItems);
      })
    }else{
      //errorの時の処理
      $(".lists").before(
        '<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>'
        )
    }
  }
//　エラー（通信失敗）の際の処理
  function displayError(err){
    $('.lists').empty();
    $('.message').remove();
    //ステータスコードでの分岐
    err.status === 0 ? $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>')
    : 400 === b.status ? $(".lists").before('<div class="message">検索キーワードが有効ではありません。<br>1文字以上で検索して下さい。</div>') 
    :$(".lists").before('<div class="message">予期せぬエラーが起きました。<br>再読み込みを行ってください。</div>')
    }

    //リセットの処理
  $('.reset-btn').on('click',function(){
    pageCount = 1;
    $('.message').remove();
    $('.lists').empty();
    $('#search-input').val('');
    });
});






