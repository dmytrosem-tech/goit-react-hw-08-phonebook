import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import { contactsFilter, contactsList } from "./Phonebook/phonebook-reducer";
// import logger from "redux-logger";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./Phonebook";
import { authReducer } from "./auth";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    middleware,
    // middleware: (getDefaultMiddlaware) =>
    //   getDefaultMiddlaware({
    //     serializableCheck: {
    //       ignoredActions: [FLUSH, REGISTER, PAUSE, REHYDRATE, PERSIST, PURGE],
    //     },
    //   }),
    devTools: process.env.NODE_ENV === "development",
  },
});

export const persistor = persistStore(store);
