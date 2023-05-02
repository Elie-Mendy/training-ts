// Specify types 
let username: string = "Elie";
let hasLoggedIn: boolean = true;

// target a bug 
// hasLoggedIn += " Mendy";
username += " Mendy";
console.log(hasLoggedIn);


let myNUmber: number = 10;
let myRexex: RegExp = /foo/;

const names: string[] = username.split(" ")
const myValues: Array<number> = [1,2,3]


// objects
interface Person {
    first: string;
    last: string;
}

const myPerson: Person = {
    first: "Elie",
    last: "Mendy"
}

// Records
const ids: Record<number, string>  = {
    10: 'a',
    20: 'b',
    30: 'c',
    40: 'd',
}
ids[50] = 'e';


// condition
if (ids[30] === 'D') {
    // do some stuff
}

// Loops 
// infered type checking 
for (let i = 0; i < 10 ; i++) {
    // do some stuff
}

[1,2,3].forEach(value => console.log(value));

// infer a number[]
const out1 = [1,2,3].map(value => value * 10);
// infer a string
const out2 = [1,2,3].map(value => `${value * 10}`);
// Rise an error 
const out3: number[] = [1,2,3].map(value => `${value * 10}`);




