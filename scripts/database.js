const database = {
    orderBuilder: {},

    paints = [
        {id: 1, color: "Silver", price: 50.00},
        {id: 2, color: "Midnight Blue", price: 75.00},
        {id: 3, color: "Firebrick Red", price: 100.00},
        {id: 4, color: "Spring Green", price: 130.00},
    ],

    wheels = [
        {id: 1, frame: "17-inch Pair Radial", price: 20.00},
        {id: 2, frame: "17-inch Pair Radial Black", price: 25.00 },
        {id: 3, frame: "18-inch Pair Spoke Silver", price: 40.00},
        {id: 4, frame: "18-inch Pair Spoke Black", price: 50.00},
    ],

    fabrics = [
        {id: 1, type: "Beige Fabric", price: 5.00},
        {id: 2, type: "Charcoal Fabric", price: 15.00},
        {id: 3, type: "White Leather", price: 60.00},
        {id: 4, type: "Black Leather", price: 70.00},
    ],

    technologies = [
        {id: 1, package: "Basic Package (basic sound system)", price: 5.00},
        {id: 2, package: "Navigation Package (includes integrated navigation controls)", price: 100.00},
        {id: 3, package: "Visibility Package (includes side and reat cameras)", price: 200.00},
        {id: 4, package: "Ultra Package (includes navigation and visibility packages)", price: 300.00},
    ],

    carOrders = [
        {id: 1, paintsId: 1, wheelsId: 1, fabricsId: 1, technologiesId: 1, timestamp: 1614659931693}
    ]
}

export const setPaint = (id) => {
    database.orderBuilder.paintsId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelsId = id
}

export const setFabric = (id) => {
    database.orderBuilder.fabricsId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologiesId = id
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getFabrics = () => {
    return database.fabrics.map(fabric => ({...fabric}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}


export const addCarOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.carOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
