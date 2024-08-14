// Telegram WebApp Initialization
Telegram.WebApp.ready();

// Функция для добавления символов на дисплей
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// Функция для очистки дисплея
function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

// Функция для удаления последнего символа
function deleteLast() {
    const display = document.getElementById('display');
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') {
        display.textContent = '0';
    }
}

// Функция для вычисления результата
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent.replace('x', '*'));
    } catch (error) {
        display.textContent = 'Ошибка';
    }
}

// Main Button Setup for Telegram WebApp
Telegram.WebApp.MainButton.text = "Закрыть калькулятор";
Telegram.WebApp.MainButton.onClick(() => Telegram.WebApp.close());
Telegram.WebApp.MainButton.show();

