const transientState = {
    "paintColorId" : 0,
    "interiorOptionId" : 0,
    "techPackageId": 0,
    "wheelOptionId" :0,
     
    

}
export const setPaintChoice = (chosenOwnership) => {
    transientState.paintColorId = chosenOwnership 
    console.log(transientState)
}

export const setInteriorChoice = (taken) => {
    transientState.interiorOptionId = taken
    console.log(transientState)
}

export const setTechChoice = (yes) => {
    transientState.techPackageId = yes
    console.log(transientState)
}
export const setWheelChoice = (no) => {
    transientState.wheelOptionId = no
    console.log(transientState)
}

export const placeOrder = async () => {


    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch ("http://localhost:8088/orders", postOptions)
    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)
}


