// Customer should be able to choose one of the following paint colors. You set the price for each one.

// Silver
// Midnight Blue
// Firebrick Red
// Spring Green

import { getPaints } from "./database.js"

const paints = getPaints()

export const PaintColor = () => {
    let html = "<ul>"

    const listItems = paints.map(paint => {
        return `<li>
            <input type="radio" name="paint" value="${paint.id}" /> ${paint.color}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}