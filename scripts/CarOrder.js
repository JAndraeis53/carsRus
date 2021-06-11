import { getCarOrders, getPaints, getWheels, getFabrics, getTechnologies } from "./database.js"

const buildOrderListItem = (order) => {

    const paints = getPaints()
    
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintsId
        }
    )

    const wheels = getWheels()
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )

    const fabrics = getFabrics()
    const foundFabric = fabrics.find(
        (fabric) => {
            return fabric.id === order.fabricsId
        }
    )
    
    const technologies = getTechnologies()
    const foundTechnology = technologies.find(
        (technology) => {
            return technology.id === order.technologiesId
        }
    )

    const totalCost = foundPaint.price + foundWheel.price + foundFabric.price + foundTechnology.price
    
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
    
}

export const CarOrder = () => {
    
    const orders = getCarOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
