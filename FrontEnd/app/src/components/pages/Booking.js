import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setBill } from '../Redux/actions/VehicleActions';


const Booking = () => {
    // get user inputs

    const vehicles = useSelector((state) => state.vehicle)
    const { id, title, imagePath, rentPerDay, transmission, brand, model, fuel, categoryName, cappacity } = vehicles

    // const bill = useSelector((state) => state)
    const dispatch = useDispatch()

    const [pickupLocation, setPickupLocation] = useState('')
    const [pickupDate, setPickupDate] = useState('')
    const [returnLocation, setReturnLocation] = useState('')
    const [dropDate, setReturnDate] = useState('')

    // get the navigate function reference
    const navigate = useNavigate()

    const selVehicle = JSON.parse(sessionStorage.getItem("selVehicle"))
    const vehicle_Id = selVehicle.vehicle_id

    const seluser = JSON.parse(sessionStorage.getItem("user"))
    const user_Id = seluser.user_id

    console.log(vehicle_Id)
    console.log(user_Id)



   

    const signin = () => {
        // check if user has really entered any value
        if (pickupDate.length === 0) {
            toast.error('Please enter Pickup Location')
        } else if (dropDate.length === 0) {
            toast.error('Please enter Pickup Date')
        } else {

            navigate(`/bill/${pickupDate}/${dropDate}`)

        }
    }


    return (
        <div style={{ marginTop: 100 }}>
            <div style={styles.container}>


                {/* <div className='mb-3'>
                    <label><b>Select Pickup Location &nbsp;</b></label>
                    <select className="btn btn-primary dropdown-toggle " data-toggle="dropdown" name="city" id="city"
                        onChange={(event) => {
                            setPickupLocation(event.target.value)
                        }}>
                        <option value="">-- Select Pickup Location --</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Nashik">Nashik</option>
                    </select>
                </div> */}

                <div className='mb-3'>
                    <label><b>Select Pickup Date &nbsp;</b></label>
                    <input
                        onChange={(event) => {
                            setPickupDate(event.target.value)
                        }}
                        className='form-control'
                        type='date'
                    />
                </div>

                {/* <div className='mb-3'>
                    <label><b>Select Drop Location &nbsp;</b></label>
                    <select className="btn btn-primary dropdown-toggle" data-toggle="dropdown" name="city" id="city"
                        onChange={(event) => {
                            setReturnLocation(event.target.value)
                        }}>
                        <option value="">-- Select Vehicle Type --</option>
                        <option value="bike">Bike</option>
                        <option value="Car">Car</option>
                    </select>
                </div> */}

                <div className='mb-3'>
                    <label><b>Select Drop Date &nbsp;</b></label>
                    <input
                        onChange={(event) => {
                            setReturnDate(event.target.value)
                        }}
                        className='form-control'
                        type='date'
                    />
                </div>

                <div className='mb-3' style={{ marginTop: 20 }}>
                    <button onClick={signin} style={styles.signinButton}>
                        Confirm Booking
                    </button>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        width: 400,
        height: 410,
        padding: 20,
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        marginBottom: 100,
        borderColor: 'black',
        borderRadius: 10,
        broderWidth: 1,
        borderStyle: 'solid',
        // boxShadow: '1px 1px 20px 5px #C9C9C9',
    },
    signinButton: {
        position: 'relative',
        width: '100%',
        height: 40,
        backgroundColor: '#db0f62',
        color: 'white',
        borderRadius: 5,
        border: 'none',
        marginTop: 10,
    },
}

export default Booking

