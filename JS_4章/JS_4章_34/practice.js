//1.

var animals =["dog","cat","rabbit"];
console.log(animals[0]);
console.log(animals[2]);

//2.
//keyはオブジェクトの中の項目で、valueは項目の中身、それらをまとめてプロパティ

//3.

var vegetable={
  name:"onion",
  value:"3000",
  color:"white",
}

console.log(vegetable);

//4.

var vegetable=[
  {name:"onion",
  value:"3000",
  color:"white",
  },

  {name:"carrot",
  value:"200",
  color:"orange",
  },

  {name:"cabbage",
  value:"200",
  color:"green",
  },
]
console.log(vegetable[0].name);
console.log(vegetable[2].color);