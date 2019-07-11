import { combineReducers } from "redux";
import flowersReducer from "./flowers/reducer";
import modalReducer from "./modal/reducer";
import userReducer from "./user/reducer";
export default combineReducers({
  flowersReducer,
  modalReducer,
  userReducer
});
