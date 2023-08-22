export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=paintColor&_expand=interiorOption&_expand=techPackage&_expand=wheelOption") /*"http://localhost:8088/orders"*/
    const orders = await fetchResponse.json()
    
    let ordersHTML = orders.map(
        (order) => {
            let orderPrice = order.paintColor.price + order.interiorOption.price + order.wheelOption.price + order.techPackage.price
            let carType = order.carType || "car"; // Default to "ring" if not specified

            // Update price based on jewelry type
            if (carType === "suv") {
                orderPrice *= 1.5;
            } else if (carType === "truck") {
                orderPrice *= 2.25;
            }

            return `<div>
            order #${order.id} (${carType})cost ${orderPrice.toFixed(2)}
        </div>`
        }
    )
    
    return ordersHTML.join("")
}