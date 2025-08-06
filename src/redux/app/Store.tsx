import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import registrationReducer from "../features/registration/registrationSlice";
import loginReducer from "../features/login/loginSlice";

export const Store = configureStore({
  reducer: {
    registerData: registrationReducer,
    loginData: loginReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch
