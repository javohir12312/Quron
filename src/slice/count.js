import { createSlice } from "@reduxjs/toolkit";


export const countetSlice = createSlice({
    name: 'count',
    initialState: {
        Audio: "",
        Domla: "ar.alafasy",
        isPlay: null
    },
    reducers: {
        playAudio: (state, { payload }) => {
            state.Audio = payload
            console.log(state.Audio);
        },
        audioDomla: (state, { payload }) => {
            state.Domla = payload
        },
        Play2: (state, { payload }) => {
            state.isPlay = payload 
            console.log(state.isPlay);
        }
    },
})

export const { playAudio, audioDomla, audioStop, Play2 } = countetSlice.actions
export default countetSlice.reducer