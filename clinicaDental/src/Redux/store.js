import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import userSlice from "../Redux/userSlice";
import detailUserSlice from "../Redux/detailUserSlice";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    user: userSlice,
    detailUser: detailUserSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)