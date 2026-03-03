let expression = "";

function append(value) {
    expression += value;
    document.getElementById('result').innerText = expression;
}

function clearAll() {
    expression = "";
    document.getElementById('result').innerText = "0";
    document.getElementById('history').innerText = "0";
}

function deleteLast() {
    expression = expression.slice(0, -1);
    document.getElementById('result').innerText = expression || "0";
}

function calculate() {
    try {
        const result = math.evaluate(expression);
        document.getElementById('history').innerText = expression;
        document.getElementById('result').innerText = math.format(result, { precision: 10 });
        expression = result.toString();
    } catch (error) {
        document.getElementById('result').innerText = "Syntax Error";
        expression = "";
    }
}
