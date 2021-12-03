const FACE_CARDS = ['jack', 'queen', 'king'];

let deck = [3, 10, 7]

let [a, ...b] = deck

let newDeck = [a, ...FACE_CARDS, ...b]

console.log(newDeck)