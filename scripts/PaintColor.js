// Customer should be able to choose one of the following paint colors. You set the price for each one.

// Silver
// Midnight Blue
// Firebrick Red
// Spring Green

import { getPaints, setPaint } from "./database.js"

// window.alert tag that we added and then removed
// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("paint")) {
//             const [, paintId] = itemClicked.id.split("--")

//             for (const paint of paints) {
//                 if (paint.id === parseInt(paintId)) {
//                     window.alert(`You have chosen ${paint.color}.`)
//                 }
//             }
//         }
//     }
// )

const paints = getPaints()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            setPaint(parseInt(event.target.value))
        }
    }
)

export const PaintColor = () => {
    let html = "<ul>"

    const listItems = paints.map(paint => {
        return `<li>
            <input id= "paint--${paint.id}" type="radio" name="paint" value="${paint.id}" /> ${paint.color}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}