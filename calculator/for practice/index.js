const dis = document.getElementById('display');
const buttons = document.querySelectorAll('button');

function appendToDisplay(value) {
    if (dis.value === 'Error') {
        dis.value = '';
    }
    dis.value += value;
}

function clearDisplay() {
    dis.value = '';
}

function calculate() {
    try {
        dis.value = eval(dis.value);
    }catch (error) { 
        dis.value = 'Error';
    }
}