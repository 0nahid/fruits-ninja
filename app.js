// add active class in selected thumbnail
let el = document.querySelectorAll('.thumb li');
for (let i = 0; i < el.length; i++) {
    el[i].onclick = function () {
        var c = 0;
        while (c < el.length) {
            el[c++].className = 'check';
        }
        el[i].className = 'check active';
    }
}
// change background color 
function changeBackground(color) {
    const bg = document.querySelector('.bg');
    bg.style.background = color;
 }
// change image on click
function imgSlider(anything) {
    document.querySelector('.fruits').src = anything;
}