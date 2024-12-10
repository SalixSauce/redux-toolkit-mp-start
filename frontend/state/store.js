// ✨ create your `store` in this module
import { configureStore } from "@reduxjs/toolkit";
import quotesRedicer from './quotesSlice'

export const store = configureStore({
    reducer : {
        quotesState: quotesRedicer,
    }
})