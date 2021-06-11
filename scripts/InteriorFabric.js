// Customer can choose from the follow options for interior seat types. You set the price for each one.

// Beige Fabric
// Charcoal Fabric
// White Leather
// Black Leather

import { getFabrics } from "./database.js"

// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("star")) {
//             const [, celebrityId] = itemClicked.id.split("--")

//             for (const celebrity of celebrities) {
//                 if (celebrity.id === parseInt(celebrityId)) {
//                     window.alert(`${celebrity.name} is ${celebrity.sport} star`)
//                 }
//             }
//         }
//     }
// )

const fabrics = getFabrics()

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