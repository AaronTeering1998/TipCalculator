function formatCurrency(value) {
    console.log(value);
    value = Math.ceil(value * 100) / 100;
    console.log(value);
    value = value.toFixed(2);
    return "€ " + value;
}

function formatPeople(value) {
    if (value === 1) return value + " Person";
    return value + " People"
}

function update() {
    let billAmount = Number(document.getElementById('billAmount').value);
    let tipAmount = Number(document.getElementById('tipAmount').value);
    let splitInput = Number(document.getElementById('splitInput').value);
    
    let tipValue = billAmount * (tipAmount/100);
    let totalValue = billAmount + tipValue;
    let tipPerPersonValue = tipValue / splitInput;
    let billPerPersonValue = (billAmount + tipValue) / splitInput;

    document.getElementById('tipPercent').innerHTML = tipAmount + "%";
    document.getElementById('tipValue').innerHTML = formatCurrency(tipValue);
    document.getElementById('totalWithTip').innerHTML = formatCurrency(totalValue);
    document.getElementById('splitPeople').innerHTML = formatPeople(splitInput);
    document.getElementById('tipEach').innerHTML = formatCurrency(tipPerPersonValue);
    document.getElementById('billEach').innerHTML = formatCurrency(billPerPersonValue);
}

let container = document.getElementById('container');
container.addEventListener('input', update);