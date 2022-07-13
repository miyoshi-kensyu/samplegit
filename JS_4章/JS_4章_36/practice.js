//1.

function functionTest(){
  alert("アラートです");
}

functionTest();


//2.

var getText = function(){
  return "getTextが実行されたのでテキストを返す"
};

console.log(getText());

//3.スコープとは
//関数内の変数は関数内のみ参照される。その範囲があることで同じ変数を宣言しても
//エラーが起きにくい