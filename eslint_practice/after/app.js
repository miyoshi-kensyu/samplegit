$(function(){
  let pageCount = 1;
  let sameWord = '';
  $('.search-btn').on('click', function(){
    const searchWord = $('#search-input').val();
    if(searchWord === sameWord){
      pageCount ++;
    }else{
      pageCount = 1 ;
      $('lists').empty();
      sameWord = searchWord;
    }
  const settings = {
    'url': `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
    'method': 'GET'
  };
  $.ajax(settings).done(function (response) {
    const result = response['@graph'];
    displayResult(result);
  }).fail(function (err) {
    displayError(err);
  });
  });
  function displayResult (res){
    $('.message').remove();
    if(res[0].items != undefined || res[0].items.length != 0){
      $.each(res[0].items, function(index){
        let title = res[0].items[index].title;
        let creator = res[0].items[index]['dc:creator'];
        let publisher = res[0].items[index]['de:publisher'];
        const id = res[0].items[index]['@id'];
        title == undefined
          ? title = 'タイトル不明'
          : title;
        creator == undefined
          ? creator = '作者不明'
          : creator;
        publisher == undefined
          ? publisher = '出版社不明'
          : publisher;
        const listItems =
        `<li class = "lists-item">
          <div class = "list-inner">
            <p>タイトル：${title}</p>
            <p>作者：${creator}</p>
            <p>出版社：${publisher}</p>
            <a href = "${id}" target="_blank">書籍情報</a>
          </div>
        </li>`;
        $('.lists').prepend(listItems);
      });
    }else{
      $('.lists').before(
        '<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>'
        );
    }
  }
  function displayError(err){
    $('.lists').empty();
    $('.message').remove();
    if (err.status === 0){
      $('.lists').before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
    }else if (400 === err.status) {
      $('.lists').before('<div class="message">検索キーワードが有効ではありません。<br>1文字以上で検索して下さい。</div>');
    }else{
      $('.lists').before('<div class="message">予期せぬエラーが起きました。<br>再読み込みを行ってください。</div>');
    }
  }
  $('.reset-btn').on('click', function(){
    pageCount = 1;
    $('.message').remove();
    $('.lists').empty();
    $('#search-input').val('');
    });
});






