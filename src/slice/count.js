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
        },
        audioDomla: (state, { payload }) => {
            state.Domla = payload
        },
        Play2: (state, { payload }) => {
            state.isPlay = payload 
        },
        Ended2: (state)=>{
            state.Audio +=1
        }
    },
})

export const { playAudio, audioDomla, audioStop, Play2 ,Ended2} = countetSlice.actions
export default countetSlice.reducer