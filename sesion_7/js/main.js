const catImage = document.getElementById('cat-image');

function changeColor(color) {
  catImage.style.fill = color;
}

function changeStrokeWidth(width) {
  catImage.style.strokeWidth = width;
}

// Event listeners for color buttons

document.querySelector('.btn-white').addEventListener('click', function() {
    changeColor('white');
  });

document.querySelector('.btn-yellow').addEventListener('click', function() {
  changeColor('yellow');
});

document.querySelector('.btn-red').addEventListener('click', function() {
  changeColor('red');
});

document.querySelector('.btn-blue').addEventListener('click', function() {
  changeColor('blue');
});

document.querySelector('.btn-green').addEventListener('click', function() {
  changeColor('green');
});


// Event listeners for stroke width buttons
document.querySelector('.btn-0px').addEventListener('click', function() {
  changeStrokeWidth('0');
});

document.querySelector('.btn-10px').addEventListener('click', function() {
  changeStrokeWidth('10px');
});

document.querySelector('.btn-20px').addEventListener('click', function() {
  changeStrokeWidth('20px');
});

document.querySelector('.btn-30px').addEventListener('click', function() {
  changeStrokeWidth('30px');
});

document.querySelector('.btn-40px').addEventListener('click', function() {
  changeStrokeWidth('40px');
});
