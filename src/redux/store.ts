import { configureStore } from "@reduxjs/toolkit";
import sliceTeams from "./sliceTeams";
import sliceUsers from "./sliceUsers";

const store = configureStore({
  reducer: {
    teams: sliceTeams,
    users: sliceUsers,
  },
});

export default store;
