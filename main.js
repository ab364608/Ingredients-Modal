var modal = document.getElementsByClassName('ingredients-modal');
var button = document.getElementsByClassName('select');
var image = document.getElementById('ingredients-img');
var heading = document.getElementsByClassName('ingredients-heading');
var body = document.getElementsByClassName('ingredients-body');

var earth = document.getElementById('earth-modal');
var cucumber = document.getElementById('cucumber-modal');
var soybean = document.getElementById('soybean-modal');

var store = null;
var count = 0;
var isOpen = '';

function openModal(e) {
    var buttonArray = [button[0], button[1], button[2], button[3], button[4], button[5], button[6], button[7], button[8], button[9], button[10]];
    for (let i=0; i < buttonArray.length; i++) {
        if (e.target == buttonArray[i] && count > 0 && isOpen == e.target.id && store != null) {
            modal[buttonArray.indexOf(e.target)].style.opacity = '0';
            store = null;
            count = 0;
            console.log('test-1')
        } else if (e.target == buttonArray[i] && count > 0 && store != null) {
            modal[buttonArray.indexOf(e.target)].style.opacity = '1';
            modal[store].style.opacity = '0';
            store = buttonArray.indexOf(e.target);
            count = 1;
            isOpen = e.target.id;
            console.log('test-2')
        } else if (e.target == buttonArray[i] && count == 0) {
            modal[buttonArray.indexOf(e.target)].style.opacity = '1';
            store = buttonArray.indexOf(e.target);
            count = 1;
            isOpen = e.target.id;
            console.log('test-3')
        } 
    }
}

function windowClose(e) {
    // for (let i=0; i < modal.length; i++) {
        if (e.target == image || e.target == heading[store] || e.target == body[store] || e.target == modal[store]) {
            console.log('test');
            modal[store].style.opacity = '0';
            // store = null;
            count = 0;
            isOpen = '';
        } else if ()
    // }
}

function closeModal(e) {
        if (e.target == modal[store]) {
            modal[store].style.opacity = '0';
        }
}

button[0].addEventListener('click', openModal);
button[1].addEventListener('click', openModal);
button[2].addEventListener('click', openModal);
button[3].addEventListener('click', openModal);
button[4].addEventListener('click', openModal);
button[5].addEventListener('click', openModal);
button[6].addEventListener('click', openModal);
button[7].addEventListener('click', openModal);
button[8].addEventListener('click', openModal);
button[9].addEventListener('click', openModal);
button[10].addEventListener('click', openModal);

// modal[0].addEventListener('click', closeModal);
// modal[1].addEventListener('click', closeModal);
// modal[2].addEventListener('click', closeModal);
// modal[3].addEventListener('click', closeModal);
// modal[4].addEventListener('click', closeModal);
// modal[5].addEventListener('click', closeModal);
// modal[6].addEventListener('click', closeModal);
// modal[7].addEventListener('click', closeModal);
// modal[8].addEventListener('click', closeModal);
// modal[9].addEventListener('click', closeModal);
// modal[10].addEventListener('click', closeModal);

window.addEventListener('click', windowClose);