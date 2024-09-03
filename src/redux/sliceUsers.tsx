import {PayloadAction, createSlice} from '@reduxjs/toolkit'


interface Users {
  id: number
  name: string
  points: number
}

const INITIAL_STATE : Users[] = [
  {id: 1, name: "Weverton", points: 1},

]



const sliceUsers = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers:{

    addUsers(state, {payload}: PayloadAction<{id:number, name: string, points: number}>){
      return [...state, {id: payload.id,name: payload.name , points: payload.points}]
    },
  },

});



export default sliceUsers.reducer;
export const {addUsers} = sliceUsers.actions;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useTeams = (state: any)=>{
  return state.users as Users[];
}