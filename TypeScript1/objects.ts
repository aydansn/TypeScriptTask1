//? Objects as parameters:
type PersonType = {
    ad: string;
    soyad: string;
    age?: number;
    birtYear?:number;
};

const person: PersonType = {
    ad: "Aydan",
    soyad: "Nurieva",
    age: 20,
};


const createSentenceAboutPerson = (sexs: PersonType) =>{
    console.log(`${sexs.ad} adi, ${sexs.soyad} soyadi, ${sexs.age} yashi`);

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




// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}


type Product = {
    name?: string;
    price: number;
}

const Phonos: Product = {
    name: "Iphone15",
    price: 7800
};
const Fruits: Product = {
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

const getTotal = (products: Product[]): number => {
    return products.reduce((cem, product) => cem + product.price, 0);
};

const products: Product[] = [
    { name: 'Product 1', price: 10.99 },
    { name: 'Product 2', price: 15.49 },
    { name: 'Product 3', price: 8.99 }
];

const totalPrice = getTotal(products);
console.log(totalPrice); 
