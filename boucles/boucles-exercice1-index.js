const hiddenMessage = ["X", "X", "X", "X", "W", "X", "E", "X", "X", "X", "X", "X", "L", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "L", "X", "X", "X", "X", "X", "X", "X", "X", "X", " ", "X", "X", "X", "X", "X", "X", "X", "X", "D", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "X", "X", "X", "X", "X", "X", "N", "X", "X", "X", "X", "E", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ",", "X", " ", "X"];

let decodedMessage = "";

for (let i = 0; i < hiddenMessage.length; i++) {
    if (hiddenMessage[i] !== "X") { 
        decodedMessage += hiddenMessage[i];
    }
}

console.log(decodedMessage);
