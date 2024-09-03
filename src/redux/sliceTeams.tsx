import {PayloadAction, createSlice} from '@reduxjs/toolkit'


interface Teams {
  name: string
  logo: string
  titlesCount: number
  win: boolean
}

const INITIAL_STATE : Teams[] = [
  {name: "lakers", logo: "",titlesCount: 0, win: false},
  {name: "Bucks", logo: "", titlesCount: 0,win: false},
  {name: "Warriors", logo: "",titlesCount: 0, win: false},
]



const sliceTeams = createSlice({
  name: 'teams',
  initialState: INITIAL_STATE,
  reducers:{
    addTeams(state, {payload}: PayloadAction<string>){
      return [...state, {name: payload,logo: payload ,titlesCount: payload, win: false}]
    },
  },

});



export default sliceTeams.reducer;
export const {addTeams} = sliceTeams.actions;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useTeams = (state: any)=>{
  return state.teams as Teams[];
}