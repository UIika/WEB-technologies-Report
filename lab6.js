//1


function showInputValue() {
    var userInput = document.getElementById("userInput61").value;
    console.log(userInput);
}


//3


const passwordInput = document.getElementById('password63');
const toggleButton = document.getElementById('toggleButton63');

toggleButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = 'Приховати';
    } else {
        passwordInput.type = 'password';
        toggleButton.textContent = 'Розкрити';
    }
});


//5


window.addEventListener('dblclick', function(event) {
    console.log(event.target.id === 'place');
});


//7


const categoriesList = document.querySelectorAll('#categories .item');
console.log(`Кількість категорій: ${categoriesList.length}`);

categoriesList.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const itemCount = category.querySelectorAll('li').length;
    console.log(`Категорія: ${categoryName}`);
    console.log(`Елементів: ${itemCount}`);
});


//8


const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (!emailInput.value.trim() || !passwordInput.value.trim()) {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim()
    };

    console.log(formData);
    loginForm.reset();
});


//9


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}

const changeColorButton = document.querySelector('.change-color');
const bodyElement = document.body;

changeColorButton.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    bodyElement.style.backgroundColor = randomColor;
    document.getElementById('colorLabel').textContent = `Колір: ${randomColor}`;
});


//10


const input = document.getElementById('input10');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value, 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Введіть число від 1 до 100.');
  }
});

destroyButton.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
});