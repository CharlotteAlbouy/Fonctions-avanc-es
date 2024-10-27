const people = ['JoHn', 'ChrISTiana', 'anThoNY', 'MARia', 'jaMeS', 'MIChaEl', 'jeNNIFeR'];

function formatName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function formatNamesArray(namesArray, callback) {
    for (let i = 0; i < namesArray.length; i++) {
        namesArray[i] = callback(namesArray[i]);
    }
    return namesArray;
}

const properlyFormattedNames = formatNamesArray(people, formatName);

console.log(properlyFormattedNames);
