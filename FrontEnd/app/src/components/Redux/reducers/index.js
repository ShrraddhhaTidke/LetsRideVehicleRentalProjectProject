import { combineReducers } from "redux";
import { billReducer, productReducer, selectedVehicleReducer, userReducer } from "./vehicleReducer";

const reducers = combineReducers({
    allVehicles: productReducer,
    vehicle: selectedVehicleReducer,
    bill: billReducer,
    user: userReducer,
})

export default reducers