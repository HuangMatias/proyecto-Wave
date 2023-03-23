import { TYPES } from './actions/actions_shopping'

export const shoppingInitialState = {
    products: [],
    cart: [],



};

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            const newItem = state.products.find(product => product.id === action.payload)
            const itemInCart = state.cart.find(item => item.id === newItem.id)
            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === newItem.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : { ...item, }

                    ),
                }
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }],
                    // counter: state.counter + 1

                }
        }
        case TYPES.REMOVE_ONE_CART: {
            const itemToDelete = state.cart.find((item) => item.id === action.payload);
            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                }
                : {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload),
                    // counter: state.counter - 1
                };
        }
        case TYPES.REMOVE_ALL_PRODUCT: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
                // counter: shoppingInitialState
            }
        }
        case TYPES.CLEAR_CART: {
            return shoppingInitialState
        }

        case TYPES.FILL_PRODUCT_LIST: {
            return {
                ...state,
                products: action.payload
            }
        }
        default:
            return state;
    }


}

