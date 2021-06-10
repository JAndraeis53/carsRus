// Customer can choose from the follow options for wheels. You set the price for each one.

// 17-inch Pair Radial
// 17-inch Pair Radial Black
// 18-inch Pair Spoke Silver
// 18-inch Pair Spoke Black

import { getWheels } from "./database.js"

const wheels = getWheels()

export const WheelsOptions = () => {
    let html = "<ul>"

    const listItems = wheels.map(wheel => {
        return `<li>
            <input type="radio" name="wheels" value="${wheel.id}" /> ${wheel.frame}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}