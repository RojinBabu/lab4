function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Error: Invalid operator. Please use '+', '-', '*', or '/'.";
    }
}

// Example Usage:
console.log(calculator(5, 2, '+')); // 7
console.log(calculator(5, 2, '-')); // 3
console.log(calculator(5, 2, '*')); // 10
console.log(calculator(5, 2, '/')); // 2.5
console.log(calculator(5, 2, '&')); // Error message
