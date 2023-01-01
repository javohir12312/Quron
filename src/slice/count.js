import { createSlice } from "@reduxjs/toolkit";


export const countetSlice = createSlice({
    name: 'count',
    initialState: {
        Audio: "",
        Domla: "ar.alafasy"
    },
    reducers: {
        playAudio: (state, { payload }) => {
            state.Audio = payload
            console.log(payload);
        },
        audioDomla: (state, { payload }) => {
            state.Domla = payload
            console.log(state.Domla);
        }
    },
})

export const { playAudio , audioDomla} = countetSlice.actions
export default countetSlice.reducer