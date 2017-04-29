function run() {
var width1 = document.getElementById("content").offsetWidth;
var width2 = document.getElementById("wrapper").offsetWidth;
var cellWidth = width2 - width1;
var cellWidth2 = cellWidth/2;
var cellWidth3 = cellWidth2 + "px";
document.getElementById("filler1").style.width=cellWidth3;
}
