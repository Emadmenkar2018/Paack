import { combineReducers } from "redux"; 
import deliveries from "./deliveries"; 

const rootReducer = combineReducers({ 
  deliveries, 
});

export default rootReducer;
