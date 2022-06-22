// 1.elseを使用するときの注意点

// if文があるときのみ使用できる。if文とelseの間に処理を書くとエラーになる。

// 2.Javascriptで実装した時の確認ポイント

// コンソールにエラーが出ていないか確認

// 3.

var number = 1;

if (number===2){
  console.log("trueの処理");
  console.log(number);
}else{
  console.log("falseの処理");
  console.log(number);
}

// 4.
var text ="1";

if (text===1){
  console.log("trueの処理");
  console.log(text);
}else{
  console.log("falseの処理");
  console.log(text);
}
