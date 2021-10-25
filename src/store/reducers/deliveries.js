import * as types from "../actionTypes";
export const ACTIVATE_DELIVERY = "ACTIVATE_DELIVERY";
export const DEACTIVATE_DELIVERY = "DEACTIVATE_DELIVERY";

const initialState = {
    deliveries: [],
    finsihDeliveryStatus: "",
    activatedDeliveryItemId: "",
    isLoading: false,
    error: null,
}

const deliveries = (state = initialState, action) => {
    switch (action.type) {

        //fetch Delivery
        case types.FETCH_DELIVERIES_REQUEST:
            return {
                ...state,
                isLoading: true

            };
        case types.FETCH_DELIVERIES_SUCCESS:
            return {
                ...state,
                deliveries: action.payload.map(item => {
                    let newItem = {
                        ...item,
                        activated: false
                    }
                    return newItem
                }),
                isLoading: false,
            };
        case types.FETCH_DELIVERIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        //Finish Delivery  
        case types.FINISH_DELIVERY_REQUEST:
            return {
                ...state,
                isLoading: true

            };
        case types.FINISH_DELIVERY_SUCCESS:
            return {
                ...state,
                finsihDeliveryStatus: action.payload.status,
                deliveries: action.payload.status === "Delivered" ? state.deliveries.filter(item => {
                    if (item.id !== state.activatedDeliveryItemId) {
                        return item
                    }
                }) : state.deliveries.map(item => {
                    let newItem = {
                        ...item,
                        activated: false
                    }
                    return newItem
                }),
                activatedDeliveryItemId: "",
                isLoading: false
            };
        case types.FINISH_DELIVERY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        //Activate delivery for UI
        case types.ACTIVATE_DELIVERY:
            return {
                ...state,
                activatedDeliveryItemId: action.payload,
                deliveries: state.deliveries.map(item => {
                    if (item.id === action.payload) {
                        let newItem = {
                            ...item,
                            activated: true
                        }
                        return newItem
                    }
                    else {
                        return item
                    }
                })

            };
        case types.DEACTIVATE_DELIVERY:
            return {
                ...state,
            };

        case types.DELETE_FINISH_DELIVERY_STATUS:
            return {
                ...state,
                finsihDeliveryStatus: ''
            };

        case types.DELETE_ERROR_FINISH_DELIVERY:
            return {
                ...state,
                finsihDeliveryStatus: state.error ? '':state.finsihDeliveryStatus,
                activatedDeliveryItemId: state.error ? '': state.activatedDeliveryItemId,
                deliveries:state.error ?  state.deliveries.map(item => {
                    let newItem = {
                        ...item,
                        activated: false
                    }
                    return newItem
                }) : state.deliveries,
                error: null
            };


        default:
            return state;
    }
};

export default deliveries;
