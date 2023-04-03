import { createSlice } from '@reduxjs/toolkit';

const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        currentGame: null,
    },
    reducers: { // здесь определены экшены, добавление в корзину и удаление из корзины
        setCurrentGame: (state, action) => { // action - {type: '', payload: { игра }}
           state.currentGame = action.payload;
        },
    }
})

export const { setCurrentGame } = gamesSlice.actions; // экспортируем экшены из cartSlice.actions
export default gamesSlice.reducer;