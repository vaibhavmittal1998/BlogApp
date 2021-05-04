export const addItemToCart = (cartItems, itemToAdd) => {
    const exisitingItem = cartItems.find(item => item.id === itemToAdd.id);

    if(exisitingItem){
        return cartItems.map(item => {
            if(item.id === itemToAdd.id){
                return {...item, quantity: item.quantity + 1}
            }
            return item;
        })
    }

    return [...cartItems, {...itemToAdd, quantity: 1}];
}

export const removeItemToCart = (cartItems, itemToRemove) => {
    const exisitingItem = cartItems.indexOf(item => item.id === itemToRemove.id);

    if(exisitingItem){
        if(cartItems[exisitingItem].quantity > 1){
            cartItems[exisitingItem].quantity = cartItems[exisitingItem].quantity - 1;
        }
        else{
            delete cartItems[exisitingItem];
        }
    }

    return cartItems;
}

export const cartItemCount = (cartItems) => {
    let quantity = 0;
    cartItems.forEach(item => {
        quantity = quantity + item.quantity;
    });
    return quantity;
}