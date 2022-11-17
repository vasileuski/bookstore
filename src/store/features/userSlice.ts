import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from "firebase/auth";
import { FirebaseErrorCode, FirebaseError, getFirebaseMessage } from "../../helpers/fireBaseErrors";

interface UserState {
  isAuth: boolean;
  email: string | null;
  isLoading: boolean;
  error: null | string;
}

const initialState: UserState = {
  isAuth: false,
  email: null,
  isLoading: false,
  error: null,
};

export const fetchSignUpUser = createAsyncThunk<
  { userEmail: string },
  { email: string; password: string },
  { rejectValue: FirebaseError }
>("user/fetchSignUpUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email as string;
    return { userEmail };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };

    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

export const fetchSignInUser = createAsyncThunk<
  { userEmail: string },
  { email: string; password: string },
  { rejectValue: FirebaseError }
>("user/fetchSignInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email as string;

    return { userEmail };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };

    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = null;
      state.email = payload.userEmail;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.isAuth = false;
        state.error = payload;
      }
    });
    builder.addCase(fetchSignInUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = null;
      state.email = payload.userEmail;
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
        state.isAuth = false;
      }
    });
  },
});

export default userSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword }
// from "firebase/auth";
// import { FirebaseErrorCode, FirebaseError, getFirebaseMessage }
// from "../../helpers/fireBaseErrors";

// interface UserState {
//   email: string;
//   isPendingAuth: boolean;
//   error: null | FirebaseError;
//   isAuth: boolean;
//   creationTime: string;
// }

// const initialState: UserState = {
//   email: "",
//   isPendingAuth: false,
//   error: null,
//   isAuth: false,
//   creationTime: "",
// };

// export const fetchSignUpUser = createAsyncThunk<
//   { creationTime: string; userEmail: string },
//   { email: string; password: string },
//   { rejectValue: FirebaseError }
// >("user/fetchSignUpUser", async ({ email, password }, { rejectWithValue }) => {
//   try {
//     const auth = getAuth();
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const creationTime = userCredential.user.metadata.creationTime as string;
//     const userEmail = userCredential.user.email as string;

//     return { creationTime, userEmail };
//   } catch (error) {
//     const firebaseError = error as { code: FirebaseErrorCode };

//     return rejectWithValue(getFirebaseMessage(firebaseError.code));
//   }
// });

// export const fetchSignInUser = createAsyncThunk<
//   { userEmail: string; creationTime: string; lastSignInTime: string },
//   { email: string; password: string },
//   { rejectValue: FirebaseError }
// >("user/fetchSignInUser", async ({ email, password }, { rejectWithValue }) => {
//   try {
//     const auth = getAuth();
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     const userEmail = userCredential.user.email as string;
//     const creationTime = userCredential.user.metadata.creationTime as string;
//     const lastSignInTime = userCredential.user.metadata.lastSignInTime as string;

//     return { userEmail, creationTime, lastSignInTime };
//   } catch (error) {
//     const firebaseError = error as { code: FirebaseErrorCode };

//     return rejectWithValue(getFirebaseMessage(firebaseError.code));
//   }
// });

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     resetError(state) {
//       state.error = null;
//     },
//   },
//   extraReducers(builder) {
//     builder.addCase(fetchSignUpUser.pending, (state) => {
//       state.isPendingAuth = true;
//       state.isAuth = false;
//       state.error = null;
//     });
//     builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
//       state.isPendingAuth = false;
//       state.error = null;

//       state.email = payload.userEmail;
//       state.creationTime = payload.creationTime;
//       state.isAuth = true;
//     });
//     builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
//       if (payload) {
//         state.isPendingAuth = false;
//         state.error = payload;
//         state.isAuth = true;
//       }
//     });
//   },
// });

// export default userSlice.reducer;
