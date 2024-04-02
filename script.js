// Select the form and the input field
const form = document.querySelector('.foam');
const input = document.querySelector('#nama');

// Add an event listener to the form's submit event
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Check if the input field is empty
  if (input.value.trim() === '') {
    // If the input field is empty, show an error message
    alert('Please enter your name');
    // And return, preventing the form from being submitted
    return;
  }

  // If the input field is not empty, toggle the display properties of the form and the photo container
  form.style.display = 'none';
  document.querySelector('.foto').style.display = 'grid';
});

// Add an event listener to the input field to disable the button when the input field is empty
input.addEventListener('input', () => {
  const button = document.querySelector('.btn-kirim');
  if (input.value.trim() === '') {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
});
function playMusic() {
  const audio = new Audio('New folder/Y2meta.app - Renai __ Decorate ( lyrics ) (128 kbps).mp3');
  audio.play();
}
function replaceElement() {
  const elementToReplace = document.querySelector(".foto");
  const hiddenElement = document.querySelector(".container");
  if (elementToReplace && hiddenElement) {
    // Hide the old element
    elementToReplace.style.display = "none";

    // Replace the old element with the hidden element
    elementToReplace.parentNode.replaceChild(
      hiddenElement,
      elementToReplace
    );

    // Show the new element
    hiddenElement.style.display = "grid";
  }
}
const text = document.querySelector('.kata');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    text.textContent = `hai ${input.value} aku mau kau lihat ini`;
    input.value = '';
});
const items = document.querySelectorAll('img');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
nextItem.classList.remove('inactive');
previousItem.classList.add('inactive');
let count = 0;
if (count === 0) {
  previousItem.classList.add('inactive');
} else {
  previousItem.classList.remove('inactive');
}
if (count === itemCount - 1) {
  nextItem.classList.add('inactive');
} else {
  nextItem.classList.remove('inactive');
}
function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
  console.log(count);
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);