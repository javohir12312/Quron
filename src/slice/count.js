import { createSlice } from "@reduxjs/toolkit";


export const countetSlice = createSlice({
    name: 'count',
    initialState: {
        Audio: "",
        Domla: "ar.alafasy",
        isPlay: false
    },
    reducers: {
        playAudio: (state, { payload }) => {
            state.Audio = payload
        },
        audioDomla: (state, { payload }) => {
            state.Domla = payload
        },
    },
})

export const { playAudio , audioDomla} = countetSlice.actions
export default countetSlice.reducer