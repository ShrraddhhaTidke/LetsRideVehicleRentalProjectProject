import { ActionTypes } from "../constants/action-types";

const initialState = {
    vehicles: [],
    bill: {
        TotalBill:0,
    } ,
    user: [],
    
}
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_VEHICLES:
            return { ...state, vehicles: payload }
        default:
            return state;
    }

}

export const selectedVehicleReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_VEHICLES:
            return { ...state, ...payload }
        case ActionTypes.REMOVE_SELECTED_VEHICLES:
            return { }
        default:
            return state;
    }

} 

export const billReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_BILL:
            return { ...state, ...payload }
        default:
            return state;
    }

}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_USER:
            return { ...state, ...payload }
        default:
            return state;
    }

}