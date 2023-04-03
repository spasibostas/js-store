import { configureStore } from "@reduxjs/toolkit"; //здесь создаем стор, функция configureStore раньше называлась createStore 
import cartReducer from './cart/reducer'
import gamesReducer from './games/reducer'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        games: gamesReducer
    }
})