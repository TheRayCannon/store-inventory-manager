const form = document.querySelector(".entry")
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
        quality: formData.get("quality")
    }

    stock = [...stock, newItem]
    findCategory(newItem)
    qualityCheck(newItem)
    mapIt(stock)
    return newItem
});


const changeDay = document.querySelector(".EOD")

changeDay.addEventListener("click", () => {
    stock.forEach(Object => { Object.sellBy - 1 })
    qualityCheck(stock)
    updateQuality(stock)
    sellByCheck(stock)
    mapIt(stock)
    console.log(stock)
})


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

function qualityCheck(stock) {
    const quality = stock.quality
    if (quality < 0) {
        return quality = 0
    } else if (quality > 50 && item.category != "Sulfurs") {
        return quality = 50
    } else {
        return quality
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


function mapIt(stock) {
    inventoryBox.innerHTML = ``
    stock.map(items => {
        const inventoryDisplay = document.createElement("div")
        inventoryDisplay.innerHTML = `
 <h3>Item: ${items.item_name}</h3>
 <p>Sell in  ${sellByCheck(items)} Days</p>
 <p>Quality: ${items.quality}</p>
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




function updateQuality(stock) {
    for (let i = 0; i < stock.length; i++) {
        if (!stock[i].item_name.includes("Aged Brie") &&
            !stock[i].item_name.includes("Backstage passes")
        ) {
            if (!stock[i].item_name.includes("Sulfuras")) {
                stock[i].quality = stock[i].quality - 1;
            }
        } else {
            if (stock[i].quality < 50) {
                stock[i].quality = stock[i].quality + 1;

                if (stock[i].item_name.includes("Backstage passes")) {
                    if (stock[i].sellBy <= 10 && stock[i].sellBy > 5) {
                        if (stock[i].quality < 50) {
                            stock[i].quality = stock[i].quality + 2;
                        }
                    }

                    if (stock[i].sellBy <= 5 && stock[i].sellBy >= 1) {
                        if (stock[i].quality < 50) {
                            stock[i].quality = stock[i].quality + 3;
                        }
                    }
                }
            }
        }

        if (!stock[i].item_name.includes("Sulfuras")) {
            stock[i].sellBy = stock[i].sellBy - 1;
        }

        if (stock[i].sellBy < 0) {
            if (!stock[i].item_name.includes("Aged Brie")) {
                if (!stock[i].item_name.includes("Bakcstage passes")) {
                    if (stock[i].quality > 0) {
                        if (!stock[i].item_name.includes("Sulfuras")) {
                            stock[i].quality = stock[i].quality - 1;
                        }
                    }
                } else {
                    stock[i].quality = stock[i].quality - stock[i].quality
                }
            } else {
                if (stock[i].quality < 50) {
                    stock[i].quality = stock[i].quality + 1;
                }
            }
        }
    }
}