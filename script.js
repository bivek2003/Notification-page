const read = document.querySelector('#right-side');
const num = document.getElementById('number');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');
function change(){
    num.style.display='none';
    first.style.background = 'white';
    second.style.background = 'white';
    third.style.background = 'white';
    dot1.style.display = 'none';
    dot2.style.display = 'none';
    dot3.style.display = 'none';
}
read.addEventListener('click',change);
