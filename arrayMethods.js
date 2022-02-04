const items = [
    { name: 'Bike',     price: 100 },
    { name: 'TV',       price: 200 },
    { name: 'Album',    price: 10 },
    { name: 'Book',     price: 5 },
    { name: 'Phone',    price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
]

// Use filter method to display items over $100

const itemNames = items.map((item) => {
    return item.name
})
console.log(itemNames)