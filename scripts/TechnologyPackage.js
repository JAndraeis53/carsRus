// Customer can choose from the follow options for the tech capabilities of the car dashboard. You set the price for each one.

// Basic Package (basic sound system)
// Navigation Package (includes integrated navigation controls)
// Visibility Package (includes side and reat cameras)
// Ultra Package (includes navigation and visibility packages)

import { getTechnologies, setTechnology } from "./database.js"

// window.alert tag that we added and then removed
// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("technology")) {
//             const [, technologyId] = itemClicked.id.split("--")

//             for (const technology of technologies) {
//                 if (technology.id === parseInt(technologyId)) {
//                     window.alert(`You have chosen ${technology.package}.`)
//                 }
//             }
//         }
//     }
// )

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const TechnologyPackage = () => {
    let html = "<ul>"

    const listItems = technologies.map(technology => {
        return `<li>
            <input id= "technology--${technology.id}" type="radio" name="technology" value="${technology.id}" /> ${technology.package}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}