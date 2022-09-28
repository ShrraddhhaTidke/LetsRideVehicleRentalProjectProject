import axios from "axios"
import { Component, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import config from "../../config"
import VehicleComponent from "./VehicleComponents.js";

import { setVehicles } from './../Redux/actions/VehicleActions';

// export default class Trial extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             vehicles: []
//         }
//     }

const VehicleListing = () => {

    const vehicles = useSelector((state)=> state)
    const dispatch = useDispatch();

    const { city, categoryName  } = useParams();

    const fetchVehicles = async() => {
        const response = await axios
        .get(`http://localhost:8080/home/vehicles/${city}/${categoryName}`)
        .catch((err) => {
            console.log("Err", err);
        })
        dispatch(setVehicles(response.data))
    }
    

    useEffect(() => {fetchVehicles();
    },[])

    console.log(vehicles)

    return (
        <div>
            <VehicleComponent/>
        </div>
        
    )
}




export default VehicleListing 

