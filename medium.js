// var a = b / c;

const cutPizzaSlices = slices => {
    return function (people) {
        var slicesPerPerson = slices / people;
        // Math.round(slicesPerPerson)
        return `Each person gets ${slicesPerPerson} slices of pizza`
        // if (slices % pizza === 0) {
        //     // Math.round(slicesPerPerson);
        // }
        // return `Each person gets ${slicesPerPerson} slices of pizza`
        // else if (slices % pizza ===! 0) {
        //     Math.round(slicesPerPerson);
        // }
        // return `Each person gets ${slicesPerPerson} slices of pizza`
    }
}
var sharePizza = cutPizzaSlices(8);

console.log(sharePizza(2));
// prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3));
// prints "Each person gets 2.67 slices of pizza"