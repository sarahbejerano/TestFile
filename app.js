const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3))

module.exports = { sum };


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function (dollars) {
    let valueInYen = dollars * 110;
    return valueInYen;
}

const fromYenToPound = function (yenes) {
    let valueInPound = yenes * .0066;
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
