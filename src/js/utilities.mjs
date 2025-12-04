export function generateRandomNumber(lowerLimit, upperLimit) {
    return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
}