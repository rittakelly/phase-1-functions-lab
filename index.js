// Code your solution in this file!
function distanceFromHqInBlocks(start) {
    const street = 42
   return start >= street ? start - street : street - start
}

function distanceFromHqInFeet(start) {
    const blocks = 264
    return distanceFromHqInBlocks(start)*blocks 
}

function distanceTravelledInFeet(start,street) {
    return Math.abs(distanceFromHqInFeet(start) - distanceFromHqInFeet(street))
}

function calculatesFarePrice(start,destination) {
    const dinf = distanceTravelledInFeet(start, destination)
    if (dinf <= 400) {
        return 0
    } else if (dinf <= 2000) {
        return (dinf - 400) * .02
    } else if (dinf <= 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}