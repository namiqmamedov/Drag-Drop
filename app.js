// let drag1= document.querySelector('#drag1');
// let drag2= document.querySelector('#drag2');
// let drag3 = document.querySelector('#drag3');
// let Dropzone1 = document.querySelector('#Dropzone1');
// let Dropzone2 = document.querySelector('#Dropzone2');
// let Dropzone3 = document.querySelector('#Dropzone3');


let dragItems = document.querySelectorAll('.box');
let Dropzone = document.querySelector('#Dropzone1');

Dropzone1.addEventListener('dragover', function (e) {

    e.preventDefault();
})
Dropzone1.addEventListener('dragleave', function (e) {

    e.preventDefault();
})
let less = document.getElementsByClassName('box');
document.getElementById('count1').innerHTML = less.length
let counter = less.length;
for (var i = 0; i < dragItems.length; i++) {
    dragItems[i].addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('drag', this.id)
        document.getElementById('count1').innerHTML = --counter;
    })

}

Dropzone.addEventListener('drop', function (e) {
    let index = e.dataTransfer.getData('drag');
    let drgItems = document.getElementById(index);
    Dropzone.appendChild(drgItems);
})


console.log(dragItems.length);
// document.getElementById('count').innerHTML = dragItems.length

// backspace (?)

var str = "Hello !";
str = str.slice(0, -1);
console.log(str)