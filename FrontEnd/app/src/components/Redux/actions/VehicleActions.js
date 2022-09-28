import { ActionTypes } from "../constants/action-types"

export const setVehicles = (vehicles) => {
    return {
        type: ActionTypes.SET_VEHICLES,
        payload: vehicles,

    }

}

export const selectedVehicles = (vehicles) => {
    return {
        type: ActionTypes.SELECTED_VEHICLES,
        payload: vehicles,
    }
}

export const removeSelectedVehicle = (vehicles) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_VEHICLES,
        
    }
}

export const setBill = (bill) => {
    return {
        type: ActionTypes.SET_BILL,
        payload: bill,
    }
}

export const setUser = (user) => {
    return {
        type: ActionTypes.SET_USER,
        payload: user,
    }
}