const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 144.73;
    // retornamos el valor
    return valueInYen;
}
const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 0.0062;
    // retornamos el valor
    return matvalueInPound;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };














