const cats = [
    "Milo", 
    "Otis", 
    "Garfield",
];

function destructivelyAppendCat (name) {
    cats.push ("Ralph");
};


function destructivelyPrependCat (name) {
    cats.unshift ("Bob");
};


function destructivelyRemoveLastCat (name) {
    cats.pop()
};

function destructivelyRemoveFirstCat (name) {
    cats.shift()
};

function appendCat(name) {
    const copyOfCat = [...cats];
    copyOfCat.push ("Broom");
    return copyOfCat;
};

function prependCat(name) {
    const newCopyOfCat = [...cats];
    newCopyOfCat.unshift ("Arnold");
    return newCopyOfCat;
};

function removeLastCat(name) {
    const aNewCopyOfCat = [...cats];
    aNewCopyOfCat.pop ();
    return aNewCopyOfCat;
};

function removeFirstCat(name) {
    const anotherNewCopyOfCat = [...cats];
    anotherNewCopyOfCat.shift ();
    return anotherNewCopyOfCat;
};