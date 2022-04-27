const form = document.querySelector("form")
const inventoryBox = document.querySelector(".inventoryBox")
const itemNameInput = document.querySelector("#item_name")


let stock = [{
    item_name: "+5 Dexterity Vest",
    sellBy: 10,
    quality: 20,
    category: "none"
}, {
    item_name: "Aged Brie",
    sellBy: 2,
    quality: 0,
    category: "Aged Brie"
}, {
    item_name: "Elixir of the Mongoose",
    sellBy: 5,
    quality: 7,
    category: "none"
}, {
    item_name: "Sulfuras, Hand of Ragnaros",
    sellBy: 0,
    quality: 80,
    category: "Sulfuras"
}, {
    item_name: "Backstage passes to a TAFKAL80ETC concert",
    sellBy: 15,
    quality: 20,
    category: "Backstage passes"
}, {
    item_name: "Conjured Mana Cake",
    sellBy: 3,
    quality: 6,
    category: "Conjured"
}]

mapIt(stock);

addEventListener("submit", event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const newItem = {
        item_name: formData.get("item_name"),
        sellBy: formData.get("sell_in"),
        quality: formData.get("quality"),
        added: formData.get("date"),
    }

    stock = [...stock, newItem]
    findCategory(newItem)
    mapIt(stock)
    return newItem
});


itemNameInput.addEventListener("input", () => {
    const qualityChecks = form.querySelector(".quality")
    if (itemNameInput.value.includes("Sulfuras")) {
        qualityChecks.value = 80;
        qualityChecks.max = 80;
        qualityChecks.min = 80;
    } else {
        qualityChecks.max = 50
        qualityChecks.min = 0
    }
})

function mapIt(stock) {
    inventoryBox.innerHTML = ``
    stock.map(items => {
        const inventoryDisplay = document.createElement("div")
        inventoryDisplay.innerHTML = `
 <h3>Item:${items.item_name}</h3>
 <p>Sell in ${items.sellBy} Days</p>
 <p>Quality:${items.quality}</p>
 <p>Category:${items.category}</p>
`
        return inventoryDisplay
    }).forEach((inventoryDisplay) => {
        inventoryBox.append(inventoryDisplay)
    })
}

function findCategory(item) {
    if (item.item_name.includes("Conjured")) {
        item.category = "conjured"
    } else if (item.item_name.includes("Aged Brie")) {
        item.category = "Aged Brie"
    } else if (item.item_name.includes("Backstage passes")) {
        item.category = "Backstage passes"
    } else if (item.item_name.includes("Sulfuras")) {
        item.category = "Sulfuras"
    } else {
        item.category = "none"
    }
}