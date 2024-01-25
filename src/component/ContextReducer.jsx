import React, { createContext, useReducer,useContext } from 'react'
const CartStateContext = createContext();
const CartDispatchContext = createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, { id: action.id, name: action.name, price: action.price, qty: action.qty, size: action.size }];
        case 'REMOVE':
            let newArr = [...state];
            newArr.splice(action.index, 1);
            return newArr;
        case 'UPDATE':
            let arr = [...state];
            let updated = false;
            arr = arr.map((food) => {
                if (food.id === action.id) {
                    updated = true;
                    return { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price };
                }
                return food;
            });
            return updated ? arr : state;
        case 'DROP':
            return [];
        default:
            console.log("Error: Unknown action type.");
            return state;
    }
};
export const CartProvider = ({
    children
}) => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
            {
                children
            }
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);