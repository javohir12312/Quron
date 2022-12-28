import { createSlice } from "@reduxjs/toolkit";

export const getOption = createSlice({
    name: "select",
    initialState: { select: "ar.alafasy" },
    reducers: {
        selected: (state, e) => {
            // state.select == e.target.value
        }
    }
})


export const { selected } = getOption.actions
export default getOption.reducer