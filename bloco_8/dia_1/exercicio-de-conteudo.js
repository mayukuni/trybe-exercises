let wakeUp = () => {return "Acordando!!"}
let coffeTime = () => {return "Bora tomar café!!"}
let goToSleep = () => {return "Partiu dormir!!"}

let doingThings = (func) => func()

console.log(doingThings(wakeUp))
console.log(doingThings(coffeTime))
console.log(doingThings(goToSleep))