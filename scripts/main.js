import { interiorOptions } from "./interior.js"
import { SaveOrder } from "./orderButton.js"
import { Orders } from "./orderlist.js"
import { paintOptions } from "./paints.js"
import { techPackage } from "./tech.js"
import { wheelOption } from "./wheels.js"

const container = document.querySelector("#container")

const render = async() => {
    const paintOptionsHTML = await paintOptions()
    const interiorOptionHTML = await interiorOptions()
    const techOptionsHTML = await techPackage()
    const wheelOptionsHTML = await wheelOption()
    const buttonHTML = await SaveOrder()
    const orderHTML = await Orders()
    const composedHTML = `

        <article class="choices">
            <section class="choices__paint options">
                <h1>Cars-R-US</h1>
                <h2>Paint</h2>
                ${paintOptionsHTML}
            </section>
            </article>
        <article class="choices2">
            <section class="choices__interior options">
                <h2>Interior Options</h2>
                ${interiorOptionHTML}
            </section>

        </article>
        <article class="choices3">
            <section class="choices__tech options">
                <h2>Technology Options</h2>
                ${techOptionsHTML}
            </section>

        </article>
        <article class="choices4">
            <section class="choices__wheel options">
                <h2>Wheel Options</h2>
                ${wheelOptionsHTML}
            </section>

        </article>
        <article class="order">
                ${buttonHTML}
        </article>
        <article class="CarOrders">

            <h2>Custom Car Orders</h2>
                ${orderHTML}

        </article>
    `

    container.innerHTML = composedHTML
}
render()
document.addEventListener("newOrderCreated", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})
