import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import movieReducer from "../features/movieSlice";

import storage from "redux-persist/lib/storage";


import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE, PERSIST} from 'redux-persist';


const persistConfig = {
    key:'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);


const store = configureStore({
    reducer: {
        auth:persistedReducer,
        movie:movieReducer,
    },
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV !== 'production', 

});


export const persistor = persistStore(store);

export default store;