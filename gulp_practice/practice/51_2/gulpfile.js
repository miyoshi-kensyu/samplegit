// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass")(require('sass'));
// style.scssをタスクを作成する
gulp.task("default", function() {
// style.scssファイルを取得
return (
gulp
.src("sass/common.scss")
// Sassのコンパイルを実⾏
.pipe(sass())
// cssフォルダー以下に保存
.pipe(gulp.dest("css"))
);
});


