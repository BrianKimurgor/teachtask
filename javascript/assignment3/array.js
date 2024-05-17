/**
 *using the data structure below , print a message  my total bill for items above 450 is 1700
 * const availableFoods = [
    {id: "qwe234dfh", name: "Burger", image:"🍔🍔", price: 234},
    {id: "qwe2356dxh", name: "pizza", image:"🍕🍕", price: 400},
    {id: "qwe2456yh", name: "meat", image:"🍖🍖", price: 500},
    {id: "qwe2785yh", name: "chicken", image:"🍗🍗", price: 1200},
]
 */

const availableFoods = [
    {id: "qwe234dfh", name: "Burger", image:"🍔🍔", price: 234},
    {id: "qwe2356dxh", name: "pizza", image:"🍕🍕", price: 400},
    {id: "qwe2456yh", name: "meat", image:"🍖🍖", price: 500},
    {id: "qwe2785yh", name: "chicken", image:"🍗🍗", price: 1200},
]
//filter the object
let food = availableFoods.filter((availableFoods) => {
    return availableFoods.price> 450
})
console.log(food)

//map the array object
let mapped = food.map(food => food.price)
console.log(mapped)

let reduced = mapped.reduce((prev, next) => {
    return prev + next
})
console.log(reduced)
console.log(`my total bill for items above 450 is ${reduced}`)
