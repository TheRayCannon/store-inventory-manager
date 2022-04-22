const form = document.querySelector("form")
const inventoryBox = document.querySelector(".inventoryBox")
let stock = [{
    item: "+5 Dexterity Vest",
    sellBy: 10,
    quality: 20
}, {
    item: "Aged Brie",
    sellBy: 2,
    quality: 0
}, {
    item: "Elixir of the Mongoose",
    sellBy: 5,
    quality: 7
}, {
    item: "Sulfuras, Hand of Ragnaros",
    sellBy: 0,
    quality: 80
}, {
    item: "Backstage passes to a TAFKAL80ETC concert",
    sellBy: 15,
    quality: 20
}, {
    item: "Conjured Mana Cake",
    sellBy: 3,
    quality: 6
}]



stock.map(items => {
    const inventoryDisplay = document.createElement("div")
    inventoryDisplay.innerHTML = `
 <h3>Item:${items.item}</h3>
 <p>Sell in ${items.sellBy} Days</p>
 <p>Quality:${items.quality}</p>
`
    return inventoryDisplay
}).forEach((inventoryDisplay) => {
    inventoryBox.append(inventoryDisplay)
})


console.log(stock)



addEventListener("submit", event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const newItem = {
        item: formData.get("item"),
        sellBy: formData.get("sell_in"),
        quality: formData.get("quality")
    }
    stock = [...stock, newItem]
    return newItem
});