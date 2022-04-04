var modal = document.getElementsByClassName('ingredients-modal');
var button = document.getElementsByClassName('select');
var heading = document.getElementsByClassName('ingredients-heading');
var bodyText = document.getElementsByClassName('ingredients-body');
var image = document.getElementById('ingredients-img');
var container = document.getElementById('ingredients-main-container');

var store = null;
var count = 0;
var isOpen = '';

function openModal(e) {
    var buttonArray = [button[0], button[1], button[2], button[3], button[4], button[5], button[6], button[7], button[8], button[9], button[10]];
    var modalArray = [modal[0], modal[1], modal[2], modal[3], modal[4], modal[5], modal[6], modal[7], modal[8], modal[9], modal[10]];
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

function closeModal(e) {
    if (e.target != modal[store] && store != null) {
        modal[store].style.opacity = '0';
    }
}

function windowClose(e) {
    if (e.target == image || e.target == container && store != null) {
        console.log('test');
        modal[store].style.opacity = '0';
        count = 0;
        isOpen = '';
    }
}



const buttons = document.querySelectorAll('.select');
const modals = document.querySelectorAll('.ingredients-modal');

buttons.forEach(button => {
    button.addEventListener('click', openModal);
})

modals.forEach(modal => {
    modal.addEventListener('click', closeModal);
})

window.addEventListener('click', windowClose);