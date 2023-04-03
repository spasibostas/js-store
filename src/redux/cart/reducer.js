import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: [],
    },
    reducers: { // здесь определены экшены, добавление в корзину и удаление из корзины
        setItemInCart: (state, action) => { // action - {type: '', payload: { игра }}
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload) // этот метод будет идти по текущему стэйту(массиву с играми) и удалять ту, на которую нажали
        },
    }
})

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions; // экспортируем экшены из cartSlice.actions
export default cartSlice.reducer;