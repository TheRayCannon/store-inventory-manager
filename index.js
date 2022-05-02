const form = document.querySelector(".entry")
const inventoryBox = document.querySelector(".inventoryBox")
const itemNameInput = document.querySelector("#item_name")
const changeDay = document.querySelector(".EOD")


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

displayStock(stock);

form.addEventListener("submit", event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const newItem = {
        item_name: formData.get("item_name"),
        sellBy: formData.get("sell_in"),
        quality: formData.get("quality")
    }

    stock = [...stock, newItem]
    findCategory(newItem)
    displayStock(stock)
    return newItem
});



changeDay.addEventListener("click", () => {
    stock.forEach(item => item.sellBy = item.sellBy - 1)
    updateQuality(stock)
    displayStock(stock)
})


function updateQuality(stock) {
    for (let i = 0; i < stock.length; i++) {
        if (!stock[i].item_name.includes("Backstage passes") &&
            !stock[i].item_name.includes("Sulfuras") &&
            !stock[i].item_name.includes("Aged Brie") &&
            !stock[i].item_name.includes("Conjured")
        ) {
            stock[i].quality = stock[i].quality - 1
        } else if (stock[i].item_name.includes("Backstage passes")) {
            if (stock[i].sellBy < 10 && stock[i].sellBy > 5) {
                stock[i].quality = stock[i].quality + 2
            } else if (stock[i].sellBy <= 5 && stock[i].sellBy >= 1) {
                stock[i].quality = stock[i].quality + 3
            } else if (stock[i].sellBy < 1) {
                stock[i].quality = stock[i].quality * 0
            } else {
                stock[i].quality = stock[i].quality + 1
            }
        } else if (stock[i].item_name.includes("Aged Brie")) {
            stock[i].quality = stock[i].quality + 1
        } else if (stock[i].item_name.includes("Conjured")) {
            if (stock[i].quality <= 0) {
                stock[i].quality = 0
            } else {
                stock[i].quality = stock[i].quality - 2
            }
        } else if (stock[i].item_name.includes("Sulfuras")) {
            stock[i].quality = 80
        }
    }
}






function qualityFloor(stock) {
    let qualityCheck = stock.quality
    if (qualityCheck < 0) {
        return qualityCheck = 0
    } else if (qualityCheck > 50 && !stock.item_name.includes("Sulfuras")) {
        return qualityCheck = 50
    } else {
        return qualityCheck
    }
}

function sellByCheck(stock) {
    let sellCheck = stock.sellBy
    if (sellCheck < 0) {
        return sellCheck = 0
    } else {
        return sellCheck
    }
}


function displayStock(stock) {
    inventoryBox.innerHTML = ``
    stock.map(items => {
        const inventoryDisplay = document.createElement("div")
        inventoryDisplay.innerHTML = `
 <h3>Item: ${items.item_name}</h3>
 <p>Sell in  ${sellByCheck(items)} Days</p>
 <p>Quality: ${qualityFloor(items)}</p>
 <p>Category: ${items.category}</p>
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