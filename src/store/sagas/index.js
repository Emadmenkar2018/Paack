import { all, fork } from "redux-saga/effects"; 
import deliveriesSaga from "./deliveriesSaga"; 

export default function* sagas() { 
  yield all([fork(deliveriesSaga)]);  
}
