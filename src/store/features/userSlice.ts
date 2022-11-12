import { createSlice, nanoid } from "@reduxjs/toolkit";

interface UserState {
  id: null | string;
  isAuth: false;
  name: null;
  email: null;
  password: null;
}

const initialState: UserState = {
  id: null,
  isAuth: false,
  name: null,
  email: null,
  password: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    generateRandomId(state) {
      state.id = nanoid();
    },
  },
});

export default userSlice.reducer;

export const { generateRandomId } = userSlice.actions;
