//1. プロパティーとメソッドの違いをまとめて3つほどメソッドを作ってください。
//オブジェクトの中の要素がkeyとvalue、valueが関数になっているものをメソッド

const teacher = {
  name: function(){
    console.log("太郎")},
  subject: function(){
    console.log("国語");},
  profile: function() {
    console.log("担当教科は国語です"); 
  } }

//2. 下記の関数を実⾏してその結果をコンソールに表⽰してください。（スコープ内に書く⽅法はだめです。）

function fruit(name, price) {
const result = name + "の値段は" + price + "円です。"
return result
};

const result=fruit("apple",300);
console.log(result);


//3. 下記の関数を経由して2つの関数を実⾏するような処理を作ってください。
function addTax(price, func) {
// priceは値段
// funcは実⾏する関数名
// 税込み価格を計算して四捨五⼊して整数にしている(スコープ内でしか参照できません。)
const taxPrice = Math.round(price * 1.10);
func(taxPrice,foodName);
return taxPrice
}
// トマトの税込み価格をコンソールに表⽰させる処理 
let foodName = function foodName(taxPrice,foodName){
  foodName = "トマト";
  console.log(foodName + "の値段は" + taxPrice + "円です。");
}
addTax(100,foodName);
// ⽟ねぎの税込み価格をコンソールに表⽰させる処理
foodName = function foodName(taxPrice,foodName){
  foodName = "玉ねぎ";
  console.log(foodName + "の値段は" + taxPrice + "円です。");
}
addTax(300,foodName);
