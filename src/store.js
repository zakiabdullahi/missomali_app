import { configureStore } from "@reduxjs/toolkit";
import modalSlice from './features/modal/modalSplice';
import competitorSlice from './features/competitors/competitorSlice';
export const store = configureStore({


    reducer: {

        modal: modalSlice,
        competitor: competitorSlice

    }



})



