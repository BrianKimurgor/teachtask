

const Actions = {
    ADD: "add_to_cart",
    DECREMENT: "decrement_item_quantity",
    REMOVE: "remove_from_cart"
}

const cardReducer = (cartItems, action) => {
    const findItemIndex = cartItems.findIndex((item) => item.productID === action.item.productID)
    if (action.type === Actions.ADD) {
        if (findItemIndex >= 0) {
            const updatedCartItems = cartItems.map(
                (item, index) => {
                    if (index === findItemIndex) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                        return item
                }

            )
            return updatedCartItems
        } else {
            return [...cartItems, { ...action.item, quantity: 1 }]
        }
    }
    return cartItems

}

export default cardReducer
