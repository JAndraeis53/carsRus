// Customer can choose from the follow options for the tech capabilities of the car dashboard. You set the price for each one.

// Basic Package (basic sound system)
// Navigation Package (includes integrated navigation controls)
// Visibility Package (includes side and reat cameras)
// Ultra Package (includes navigation and visibility packages)

import { getTechnologies } from "./database.js"

const technologies = getTechnologies()

export const TechnologyPackage = () => {
    let html = "<ul>"

    const listItems = technologies.map(technology => {
        return `<li>
            <input type="radio" name="technology" value="${technology.id}" /> ${technology.package}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}