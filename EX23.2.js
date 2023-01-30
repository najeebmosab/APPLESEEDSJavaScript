const storm = {
    superPower:"isFlying",
    // printSuperPower
}
function printSuperPower() {
    console.log("my superpower is " +
        this.superPower);
}
printSuperPower.apply(storm);
// console.log(storm.superPower)
