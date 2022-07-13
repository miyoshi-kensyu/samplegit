const mainTitle = document.getElementById("main-title");
console.log(mainTitle);

const contents = document.getElementsByClassName("contents");
console.log(contents);

// idで指定したwrapperを取得
const wrapper = document.getElementById("wrapper")
// 挿⼊するHTML要素
const newBox = `<div class="new-box">new-box要素</div>`
// setTimeoutはJavaScriptが⽤意している関数です・
setTimeout(function () {
// wrapper要素内先頭にnewBoxに代⼊されたHTML要素を挿⼊
wrapper.insertAdjacentHTML("afterbegin", newBox)
// wrapper要素の直後にnewBoxに代⼊されたHTML要素を挿⼊
wrapper.insertAdjacentHTML("afterend", newBox)
}, 3000)

// idで指定したparentを取得
const parent = document.getElementById("parent")
// idで指定したchildを取得
const child = document.getElementById("child")
setTimeout(function () {
// 3秒後に#child要素が削除される
parent.removeChild(child)
}, 3000)