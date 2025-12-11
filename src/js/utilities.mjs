export function generateRandomIndex() {
    const upperLimit = 117;
    const lowerLimit = 0;
    return Math.floor(Math.random() * (upperLimit -  + lowerLimit)) + lowerLimit;
}