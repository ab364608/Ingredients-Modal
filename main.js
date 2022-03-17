var modal = document.getElementsByClassName('ingredients-modal');
var button = document.getElementsByClassName('select');

var earth = document.getElementById('earth-modal');
var cucumber = document.getElementById('cucumber-modal');
var soybean = document.getElementById('soybean-modal');

var count = 0;

// function openModal(e) {
//     for (let i=0; i < button.length; i++) {
//         if (e.target == button[i]) {
//             modal[i].style.opacity = '1';
//         }
//     }
//     selected = e.target;
//     console.log(selected);
// }

function openModal(e) {
    console.log(button);
    console.log(e.target);
    if (e.target === button[0]) {
        modal[0].style.opacity = '1';
        modal[1].style.opacity = '0';
        modal[2].style.opacity = '0';
    } else if (e.target == button[1]) {
        modal[0].style.opacity = '0';
        modal[1].style.opacity = '1';
        modal[2].style.opacity = '0';
    } else if (e.target == button[2]) {
        modal[0].style.opacity = '0';
        modal[1].style.opacity = '0';
        modal[2].style.opacity = '1';

    }
}

// function closeModal(e) {
//     for (let i=0; i < button.length; i++) {
//         if (e.target == selected) {
//             modal[i].style.opacity = '1';
//         }
//     }
// }





button[0].addEventListener('click', openModal);
// button[0].addEventListener('click', closeModal);

button[1].addEventListener('click', openModal);
button[2].addEventListener('click', openModal);