import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Teams {
  name: string;
  logo: string;
  titlesCount: number;
  active: boolean;
  conference: string;
}

const INITIAL_STATE: Teams[] = [
  {
    name: "lakers",
    logo: "",
    titlesCount: 0,
    active: false,
    conference: "west",
  },
  {
    name: "Bucks",
    logo: "",
    titlesCount: 0,
    active: false,
    conference: "east",
  },
];

const sliceTeams = createSlice({
  name: "teams",
  initialState: INITIAL_STATE,
  reducers: {
    addTeams(state, { payload }: PayloadAction<string>) {
      return [
        ...state,
        {
          name: payload,
          logo: payload,
          titlesCount: payload,
          active: false,
          conference: payload,
        },
      ];
    },
  },
});

export default sliceTeams.reducer;
export const { addTeams } = sliceTeams.actions;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useTeams = (state: any) => {
  return state.teams as Teams[];
};
