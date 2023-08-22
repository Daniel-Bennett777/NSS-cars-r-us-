const transientState = new Map()
    transientState.set("paintColorId", 0),
    transientState.set ("interiorOptionId", 0),
    transientState.set("techPackageId", 0),
    transientState.set("wheelOptionId", 0),
    transientState.set("carType", "car")
    
     

export const setCarTypeChoice = (chosenType) => {
    transientState.set("carType", chosenType);
    console.log(transientState);
};
export const setPaintChoice = (chosenOwnership) => {
    transientState.set("paintColorId", chosenOwnership);
    console.log(transientState)
}

export const setInteriorChoice = (taken) => {
    transientState.set("interiorOptionId", taken);
    console.log(transientState)
}

export const setTechChoice = (yes) => {
    transientState.set("techPackageId", yes);
    console.log(transientState)
}
export const setWheelChoice = (no) => {
    transientState.set("wheelOptionId", no)
    console.log(transientState)
}

export const placeOrder = async () => {
const transientObj = Object.fromEntries(transientState)

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientObj)
    }

    const response = await fetch ("http://localhost:8088/orders", postOptions)
    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)
}


