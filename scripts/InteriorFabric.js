// Customer can choose from the follow options for interior seat types. You set the price for each one.

// Beige Fabric
// Charcoal Fabric
// White Leather
// Black Leather

import { getFabrics } from "./database.js"

const fabrics = getFabrics()

export const InteriorFabric = () => {
    let html = "<ul>"

    const listItems = fabrics.map(fabric => {
        return `<li>
            <input type="radio" name="fabric" value="${fabric.id}" /> ${fabric.type}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}