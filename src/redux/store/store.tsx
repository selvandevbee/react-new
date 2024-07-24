import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { countSlice } from "../slice/demoSlice";



const rootReducer = combineReducers({
    counterapp: countSlice.reducer,
});

export const store = configureStore({
    reducer: {
        counterapp: rootReducer
    }
})

// export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;