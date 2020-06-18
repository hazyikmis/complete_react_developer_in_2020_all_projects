export const addNewItemToCart = (cartItems, newItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === newItem.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //this below return runs at first, when the first time item added to cart
  //otherwise, this function always returns above
  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToBeRemoved) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToBeRemoved.id);
};


export const decreaseCartItemQuantity = (cartItems, item) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingCartItem.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};
