// Write your solution here!
const cats = ["Milo", "Otis","Garfield"];
cat;

function destructivelyAppendCat(cat){
    cats.push("Ralph");
}
destructivelyAppendCat(cats);


function destructivelyPrependCat(cat){
    cats.unshift("Bob");
}
destructivelyPrependCat(cats);

function destructivelyRemoveLastCat(cat){
    cats.pop();
}
destructivelyRemoveLastCat(cats); 

function destructivelyRemoveFirstCat(cat){
    cats.shift();
}
destructivelyRemoveFirstCat(cats);

function appendCat(cat){
    const allCats = [...cats, "Broom"];
    return allCats;
}


function prependCat(cat){
    const newCat = ["Arnold", ...cats];
    return newCat;
}


function removeLastCat(cat){
    const thirdCat = cats.slice(0, -1);
    return thirdCat;
}


function removeFirstCat(cat){
    const fourthCat = cats.slice(1);
    return fourthCat;
}
removeFirstCat(cats);  