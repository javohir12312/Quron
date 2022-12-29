import { createSlice } from "@reduxjs/toolkit";


export const countetSlice = createSlice({
    name: 'count',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
           if(state.count > 0){
            state.count -= 1
           }else{
            state.count = 0
           }
        }
    },
})

export const { increment, decrement } = countetSlice.actions
export default countetSlice.reducer