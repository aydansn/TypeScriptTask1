const board: string[][] =[
    ["X","O","X"],
    ["X","O","X"],
    ["X","O","X"],
];

const myFriends: string[] = ["Aydan", "Nargis", "Gulka"];
const birtYears: number[] =[23,45,67,87,45];
const mixArr:any[]=["Ay", 24,false];
console.log(myFriends);
console.log(birtYears);
console.log(mixArr);

//generic
const ages: Array<number> = [23,45,67];
const names: Array<string> =["Sel"];
const booleans: Array<boolean> = [true,false];


// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

let yashlari:number[] = [23,45,67,23,45];
console.log(yashlari);

let yas: Array<number> = [23,5,6,78,97,43];
console.log(yas);

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

let gameBoard: string[][]=[
    ["Aydans"],
    ["Leyla"]
];
console.log(gameBoard);
