export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=paintColor&_expand=interiorOption&_expand=techPackage&_expand=wheelOption") /*"http://localhost:8088/orders"*/
    const orders = await fetchResponse.json()
    
    let ordersHTML = orders.map(
        (order) => {
            const orderPrice = order.paintColor.price + order.interiorOption.price + order.wheelOption.price + order.techPackage.price

            return `<div>
            order #${order.id} cost ${orderPrice}
        </div>`
        }
    )
    
    return ordersHTML.join("")
}