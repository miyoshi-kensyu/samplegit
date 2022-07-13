//1.
for (var i =1; i<10; i++){
  console.log(i+"kaitenn");
};

//2.

var items =["edo","meiji","taisyou"];
for (index in items){
  console.log(items[index]);
};

//3.

var foods =[
  {name:"トマト",color:"red",value:200},
  {name:"キャベツ",color:"green",value:200},
  {name:"onion",color:"white",value:600},
]
for (food of foods){
  console.log(food);
};
