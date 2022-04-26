const { it } = require("eslint/lib/rule-tester/rule-tester")

const form = document.querySelector("form")
const inventoryBox = document.querySelector(".inventoryBox")
let stock = [{
    item: "+5 Dexterity Vest",
    sellBy: 10,
    quality: 20,
    catigory: none
}, {
    item: "Aged Brie",
    sellBy: 2,
    quality: 0,
    catigory: "Aged Brie"
}, {
    item: "Elixir of the Mongoose",
    sellBy: 5,
    quality: 7,
    catigory: "none"
}, {
    item: "Sulfuras, Hand of Ragnaros",
    sellBy: 0,
    quality: 80,
    catigory: "Sulfuras"
}, {
    item: "Backstage passes to a TAFKAL80ETC concert",
    sellBy: 15,
    quality: 20,
    catigory: "Backstage passes"
}, {
    item: "Conjured Mana Cake",
    sellBy: 3,
    quality: 6,
    catigory: "Conjured"
}]


function mapIt(stock) {
    inventoryBox.innerHTML = ``
    stock.map(items => {
        const inventoryDisplay = document.createElement("div")
        inventoryDisplay.innerHTML = `
 <h3>Item:${items.item}</h3>
 <p>Sell in ${items.sellBy} Days</p>
 <p>Quality:${items.quality}</p>
 <p>Catigory:${items.catigory}</p>
`
        return inventoryDisplay
    }).forEach((inventoryDisplay) => {
        inventoryBox.append(inventoryDisplay)
    })
}


mapIt(stock);

function catigorySet(newItem) {
    if (item.item.inlucdes("Conjured")) {
        item.catigory = "conjured"
    } else if (item.item.inlucdes("Aged Brie")) {
        item.catigory = "Aged Brie"
    } else if (item.item.inlucdes("Backstage passes")) {
        item.catigory = "Backstage passes"
    } else if (item.item.inlucdes("Sulfuras")) {
        item.catigory = "Sulfuras"
    } else {
        item.catigory = none
    }
}

addEventListener("submit", event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const newItem = {
        item: formData.get("item"),
        sellBy: formData.get("sell_in"),
        quality: formData.get("quality"),
        // catigory: catigorySet(newItem)
    }
    stock = [...stock, newItem]
    mapIt(stock)
});