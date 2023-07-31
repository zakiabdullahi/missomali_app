import { createSlice } from "@reduxjs/toolkit";

import competitors from "../../assets/competitors.json";



const initialState = {

    competitors: JSON.parse(window.localStorage.getItem("competitors")) || competitors,
    currentCompetitor: null,
    voteCount: 0
}

const competitorSlice = createSlice({


    name: "competitor",
    initialState,
    reducers: {


        setCurrentCompetitor: (state, action) => {
            state.currentCompetitor = action.payload
        },

        increaseVote: (state) => {

            state.voteCount = state.voteCount + 1
        },
        decreaseVote: (state) => {

            state.voteCount = state.voteCount - 1
        },

        addVoteCount: (state, action) => {

            const compId = state.competitors.findIndex(comp => comp.Id === action.payload);

            console.log(compId);


            state.competitors[compId].NumberofVotes = Number(state.competitors[compId].NumberofVotes) + Number(state.voteCount)

            window.localStorage.setItem("competitors", JSON.stringify(state.competitors));


        },
        resetState: (state) => {
            state.currentCompetitor = null,
                state.voteCount = 0
        }

    }



})

export default competitorSlice.reducer;

export const { setCurrentCompetitor, increaseVote, decreaseVote, addVoteCount, resetState } = competitorSlice.actions;