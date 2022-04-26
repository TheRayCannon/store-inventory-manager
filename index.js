const form = document.querySelector("form")
const inventoryBox = document.querySelector(".inventoryBox")
let stock = [{
    item: "+5 Dexterity Vest",
    sellBy: 10,
    quality: 20,
    category: "none"
}, {
    item: "Aged Brie",
    sellBy: 2,
    quality: 0,
    category: "Aged Brie"
}, {
    item: "Elixir of the Mongoose",
    sellBy: 5,
    quality: 7,
    category: "none"
}, {
    item: "Sulfuras, Hand of Ragnaros",
    sellBy: 0,
    quality: 80,
    category: "Sulfuras"
}, {
    item: "Backstage passes to a TAFKAL80ETC concert",
    sellBy: 15,
    quality: 20,
    category: "Backstage passes"
}, {
    item: "Conjured Mana Cake",
    sellBy: 3,
    quality: 6,
    category: "Conjured"
}]


function mapIt(stock) {
    inventoryBox.innerHTML = ``
    stock.map(items => {
        const inventoryDisplay = document.createElement("div")
        inventoryDisplay.innerHTML = `
 <h3>Item:${items.item}</h3>
 <p>Sell in ${items.sellBy} Days</p>
 <p>Quality:${items.quality}</p>
 <p>Category:${items.category}</p>
`
        console.log(categorySet(items))
        return inventoryDisplay
    }).forEach((inventoryDisplay) => {
        inventoryBox.append(inventoryDisplay)
    })
}


mapIt(stock);


function categorySet(item) {
    if (item.item === "Conjured") {
        item.category = "conjured"
    } else if (item.item === "Aged Brie") {
        item.category = "Aged Brie"
    } else if (item.item === "Backstage passes") {
        item.category = "Backstage passes"
    } else if (item.item === "Sulfuras") {
        item.category = "Sulfuras"
    } else {
        item.category = "none"
    }
    return item
}


addEventListener("submit", event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const newItem = {
        item: formData.get("item"),
        sellBy: formData.get("sell_in"),
        quality: formData.get("quality"),

    }
    stock = [...stock, newItem]
    mapIt(stock)
});