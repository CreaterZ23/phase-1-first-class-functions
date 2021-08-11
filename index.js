// function runFiveMiles() {
//     console.log("Go for a five-mile run");
// }

// function liftWeights() {
//     console.log("Pump iron");
// }

// function swimFortyLaps() {
//     console.log("Swim 40 laps");
// }

// function Monday() {
//     runFiveMiles();
//     liftWeights();
// }

// function monday(exerciseRoutine) {
//    exerciseRoutine(liftWeights);
// }

// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
// }
const newFuntction = () => {}

function receivesAFunction(newFuntction) {
    return newFuntction();
}

function returnsANamedFunction() {
    return function receivesAFunction() {}
}

function returnsAnAnonymousFunction() {
    return function() {

    }
}