import { PaintColor } from "./PaintColor.js"
import { WheelsOptions } from "./WheelsOptions.js"
import { TechnologyPackage } from "./TechnologyPackage.js"
import { InteriorFabric } from "./InteriorFabric.js"
import { CarOrder } from "./CarOrder.js"
import { addCarOrder } from "./database.js"

// document.addEventListener(
    
// )

export const CarsRus = () => {
    return `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paint Colors</h2>
                ${PaintColor()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheel Packages</h2>
                ${WheelsOptions()}
            </section>
            <section class="choices__fabrics options">
                <h2>Interior Fabrics</h2>
                ${InteriorFabric()}
            </section>
            <section class="choices__technologies options">
                <h2>Technology Packages</h2>
                ${TechnologyPackage()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
            
        </article>

        <article class="carOrders">
            <h2>Custom Car Orders</h2>
            ${CarOrder()}
        </article>
    `
}
