// Customer can choose from the follow options for wheels. You set the price for each one.

// 17-inch Pair Radial
// 17-inch Pair Radial Black
// 18-inch Pair Spoke Silver
// 18-inch Pair Spoke Black

import { getWheels, setWheel } from "./database.js"

// window.alert tag that we added and then removed
// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("wheel")) {
//             const [, wheelId] = itemClicked.id.split("--")

//             for (const wheel of wheels) {
//                 if (wheel.id === parseInt(wheelId)) {
//                     window.alert(`You have chosen ${wheel.frame}.`)
//                 }
//             }
//         }
//     }
// )

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const WheelsOptions = () => {
    let html = "<ul>"

    const listItems = wheels.map(wheel => {
        return `<li>
            <input id= "wheel-- ${wheel.id}" type="radio" name="wheels" value="${wheel.id}" /> ${wheel.frame}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}