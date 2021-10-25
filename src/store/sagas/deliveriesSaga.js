import { all, put, call, fork, takeLatest } from 'redux-saga/effects'
import apiCall from "../../helpers/api";
import * as actions from "../actions/deliveries";
import * as actionTypes from "../actionTypes";


/**
  * Yield last call of FETCH_DELIVERIES_REQUEST action and call getFetchDeliveries
 */
function* watchDeliveries() {
    yield takeLatest(actionTypes.FETCH_DELIVERIES_REQUEST, getFetchDeliveries);
}

/**
  *   Yield last call of FINISH_DELIVERY_REQUEST action and call postFinishDelivery
  *  
 */
function* watchFinishDelivery() {
    yield takeLatest(actionTypes.FINISH_DELIVERY_REQUEST, postFinishDelivery);
}



/**
  * Get deliveries  
  * Call fetchDeliveriesSuccess actions in Success
  * Call fetchDeliveriesFailure actions in Failure
  * 
  * @param {object} action
 */
export function* getFetchDeliveries() {
    try {
        const res = yield call(apiCall,
            'get',
            'deliveries'
        );
        yield put(actions.fetchDeliveriesSuccess(res.data));

    } catch (err) {
        yield put(actions.fetchDeliveriesFailure(err));
    }
}

/**
  * Call finishDelivery with the payload object
  * Call finishDeliverySuccess actions in Success
  * Call finishDeliveryFailure actions in Failure
  * 
  * @param {object} action
 */
function* postFinishDelivery(action) {
    try {
        const res = yield call(apiCall,
            'post',
            'finishDelivery',
            {
                ...action?.payload
            }
        );
        yield put(actions.finishDeliverySuccess(res.data));

    } catch (err) {
        yield put(actions.finishDeliveryFailure(err));
    }
}

/**
  * Responsible to yield all called actions
 */
export default function* deliveriesSaga() {
    yield all([
        fork(watchDeliveries),
        fork(watchFinishDelivery),
    ]);
}

