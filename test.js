
// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
   const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
    
})



test("One dolar should be 110 yen", function(){
    const { fromDollarToYen } = require('./app.js')
     expect(fromDollarToYen(3.5)).toBe(385); 
     
 })



 test("One yen should be 0.066 pounds", function(){
    const {fromYenToPound } = require('./app.js')
     expect(fromYenToPound(3.5)).toBe(0.0231); 
     
 })


