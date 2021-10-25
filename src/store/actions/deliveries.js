import * as types from "../actionTypes";

//Fetch Deliveries Actions 
export const fetchDeliveriesStart = (options) => ({
    type: types.FETCH_DELIVERIES_REQUEST,
    payload: options,
});

export const fetchDeliveriesSuccess = (options) => ({
    type: types.FETCH_DELIVERIES_SUCCESS,
    payload: options,
});

export const fetchDeliveriesFailure = (options) => ({
    type: types.FETCH_DELIVERIES_FAILURE,
    payload: options,
});
   
//Finish Delivery Actions 
export const finishDeliveryStart = (options) => ({
    type: types.FINISH_DELIVERY_REQUEST,
    payload: options,
});

export const finishDeliverySuccess = (options) => ({
    type: types.FINISH_DELIVERY_SUCCESS,
    payload: options,
});

export const finishDeliveryFailure = (options) => ({
    type: types.FINISH_DELIVERY_FAILURE,
    payload: options,
});

//activate Delivery for UI
export const activateDeliveryUI = (options) => ({
    type: types.ACTIVATE_DELIVERY,
    payload: options,
});

export const deactivateDeliveryUI = (options) => ({
    type: types.DEACTIVATE_DELIVERY,
    payload: options,
});


// Deleting Reducer Items 
export const deleteFinishDeliveryStatus = (options) => ({
    type: types.DELETE_FINISH_DELIVERY_STATUS,
    payload: options,
});

export const deleteFinishDeliveryError = (options) => ({
    type: types.DELETE_ERROR_FINISH_DELIVERY,
    payload: options,
});

