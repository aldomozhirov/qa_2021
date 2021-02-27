export let simpleCalculation = function simpleCalculation(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно из значений или оба не числа'
    }  else return a + b;
}

export let compareTwoNumbers = function compareTwoNumbers(inp1, inp2) {
    if (inp1 > inp2) return inp1
    else return inp2
}

export let isNumberOddOrEven = function isProductOfNumbersOddOrEven(inp1, inp2) {
    let product = inp1 * inp2;
    if (product > 1000000) {
        return `Произведение чисел ${inp1} и ${inp2} превышает пороговое значение`;
    }
    if(product % 2 == 0) {
        return `Произведение чисел ${inp1} и ${inp2} четно`;
    } else {
        return `Произведение чисел ${inp1} и ${inp2} НЕ четно`;
    }
}