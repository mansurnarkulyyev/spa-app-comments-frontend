import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/auth-slice";

const authPersistConfig = {//что бы созранить токен юзера в локалстороже 
  key: "token",
  storage,
  whitelist: ["token"],//whitelist это что созранить,на пример нам только token все инфо не надо созранить
};

const authPersistReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
  auth: authPersistReducer,
 
});

 
export default rootReducer;