// Customer can choose from the follow options for interior seat types. You set the price for each one.

// Beige Fabric
// Charcoal Fabric
// White Leather
// Black Leather

import { getFabrics, setFabric } from "./database.js"

// window.alert tag that we added and then removed
// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("fabric")) {
//             const [, fabricId] = itemClicked.id.split("--")

//             for (const fabric of fabrics) {
//                 if (fabric.id === parseInt(fabricId)) {
//                     window.alert(`You have chosen ${fabric.type}.`)
//                 }
//             }
//         }
//     }
// )

const fabrics = getFabrics()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "fabric") {
            setFabric(parseInt(event.target.value))
        }
    }
)

export const InteriorFabric = () => {
    let html = "<ul>"

    const listItems = fabrics.map(fabric => {
        return `<li>
            <input id="fabric--${fabric.id}" type="radio" name="fabric" value="${fabric.id}" /> ${fabric.type}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}