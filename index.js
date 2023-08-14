// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

// function myTest(testNum) {
//     console.log(`Test number: ${testNum}. Cats value: ${cats}. \n`);
// }

// myTest(1);

function destructivelyAppendCat(name) {
    cats.push(`${name}`);
}

// destructivelyAppendCat("Bastet");
// myTest(2);

function destructivelyPrependCat(name) {
    cats.unshift(`${name}`);
}

// destructivelyPrependCat("Bagheera");
// myTest(3);

function destructivelyRemoveLastCat() {
    cats.pop();
}

// destructivelyRemoveLastCat();
// myTest(4);

function destructivelyRemoveFirstCat() {
    cats.shift();
}

// destructivelyRemoveFirstCat();
// myTest(5);

function appendCat(name) {
    return [...cats, `${name}`];
}


// const newCats = appendCat("Broom");
// console.log(`cats = ${cats}.
// newCats = ${newCats}`);

function prependCat(name) {
    return [`${name}`, ...cats];
}

// const moreCats = prependCat("Garfield");
// console.log(`cats = ${cats}.
// moreCats = ${moreCats}`);

function removeLastCat() {
    return cats.slice(0, -1);
}

// console.log(cats);
// const reLastCats = removeLastCat(cats);
// console.log(reLastCats);

function removeFirstCat() {
    return cats.slice(1);
}


// console.log(cats);
// const reFirstCats = removeFirstCat(cats);
// console.log(reFirstCats);