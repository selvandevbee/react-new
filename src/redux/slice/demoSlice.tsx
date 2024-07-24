import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    count: 0,
    button: ""

}

export const countSlice = createSlice({
    name: "counterapp",
    initialState,
    reducers: {
        counterApp: (state, action) => {
            switch (action.payload.type) {
                case "INCREMENT":
                    state.count = state.count + 1
                    break;
                case "DECREMENT":
                    state.count = state.count - 1
                    break;
                default:
                    break;
            }
        },
        resetCounter: (state, action) => {
            state.count = action.payload
        }
    }
})
export const { counterApp, resetCounter } = countSlice.actions
export default countSlice.reducer;