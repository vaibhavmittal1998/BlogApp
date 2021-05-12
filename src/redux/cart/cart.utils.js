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

// export const removeItemToCart = (cartItems, itemToRemove) => {
//     const exisitingItem = cartItems.findIndex(item => item.id === itemToRemove.id);

//     if(exisitingItem > -1){
//         if(cartItems[exisitingItem].quantity > 1){
//             cartItems[exisitingItem].quantity = cartItems[exisitingItem].quantity - 1;
//         }
//         else{
//             cartItems.splice(exisitingItem,1);
//         }
//     }

//     return cartItems;
// }

export const removeItemToCart = (cartItems, itemToRemove) => {
    const exisitingItem = cartItems.find(item => item.id === itemToRemove.id);

    if(exisitingItem.quantity === 1){
        return cartItems.filter(item => item.id !== exisitingItem.id);
    }

    return cartItems.map(item => item.id === exisitingItem.id ? {...item, quantity: item.quantity -1 } : item);
}

export const clearItemToCart = (cartItems, itemToClear) => {
    const exisitingItem = cartItems.find(item => item.id === itemToClear.id);

    if(exisitingItem){
        return cartItems.filter(item => item.id !== exisitingItem.id);
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