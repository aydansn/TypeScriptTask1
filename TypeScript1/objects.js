var person = {
    ad: "Aydan",
    soyad: "Nurieva",
    age: 20,
};
var createSentenceAboutPerson = function (sexs) {
    console.log("".concat(sexs.ad, " adi, ").concat(sexs.soyad, " soyadi, ").concat(sexs.age, " yashi"));
};
createSentenceAboutPerson({
    ad: "Aydan",
    soyad: "Nuriyeva",
    age: 20,
});
createSentenceAboutPerson({
    ad: "Ido",
    soyad: "Aziyev",
});
var Phonos = {
    name: "Iphone15",
    price: 7800
};
var Fruits = {
    name: "Apple",
    price: 20
};
console.log(Phonos);
console.log(Fruits);
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var getTotal = function (products) {
    return products.reduce(function (cem, product) { return cem + product.price; }, 0);
};
var products = [
    { name: 'Product 1', price: 10.99 },
    { name: 'Product 2', price: 15.49 },
    { name: 'Product 3', price: 8.99 }
];
var totalPrice = getTotal(products);
console.log(totalPrice);
