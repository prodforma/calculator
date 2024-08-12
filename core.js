// Получение ссылки на дисплей
const display = document.getElementById('display');

// Функция для добавления символов на дисплей
function appendToDisplay(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// Функция для очистки дисплея
function clearDisplay() {
    display.textContent = '0';
}

// Функция для удаления последнего символа
function deleteLast() {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') {
        display.textContent = '0';
    }
}

// Функция для вычисления результата
function calculateResult() {
    try {
        display.textContent = eval(display.textContent.replace('x', '*'));
    } catch (error) {
        display.textContent = 'Ошибка';
    }
}
