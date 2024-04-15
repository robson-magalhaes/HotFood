const initialState = {
    products: [],
    address: [],
    discount: 0,
    delivery: 0
};

export const CartReducer = (state = initialState, action) => {
    let products = [...state.products];
    switch (action.type) {
        case 'ADD_PRODUCT':
            let id = action.payload.data.id;
            let index = products.findIndex(item => item.id === id);
            if (index > -1) {
                products[index].quantity += action.payload.quantity
            } else {
                products.push({
                    ...action.payload.data,
                    quantity: action.payload.quantity,
                })
            }
            return { ...state, products };
        case 'CHANGE_PRODUCT':
            if (state.products.length > 0) {
                let item = products[action.payload.key];
                if (item) {
                    switch (action.payload.type) {
                        case '-':
                            item.quantity--;
                            if (item.quantity <= 0) {
                                products = products.filter((item, index) => index != action.payload.key)
                            }
                            break;
                        case '+':
                            item.quantity++;
                            break;
                    }
                }
            }
            return { ...state, products };
        default:
            return state;
    }
}
export default CartReducer