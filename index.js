// Code your solution in this file!
const hqStreet = 42;

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue - hqStreet);
}

function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

    let feet = blocks * 264; 
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return feet;
}


function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let dist = distanceFromHqInFeet(start) - distanceFromHqInFeet(destination);
    return Math.abs(dist);
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let dist = distanceTravelledInFeet(start, destination);

    if (dist <= 400) {
        return 0;
    } else if (dist > 400 && dist <= 2000) {
        const freeAmount = 400;
        return .02 * (dist - freeAmount);
    } else if (dist > 2000 && dist < 2500) {
        return 25;
    } else if (dist > 2500) {
        return 'cannot travel that far';
    }
}

console.log(distanceTravelledInFeet(34, 32));
console.log(calculatesFarePrice(34, 32));
console.log(2 * 264)