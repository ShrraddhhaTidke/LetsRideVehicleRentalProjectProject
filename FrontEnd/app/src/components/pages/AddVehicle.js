import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import config from '../../config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { screen } from '@testing-library/react';

const AddVehicle = () => {

    
    const [vehicletype, setVehicleType] = useState('')
    const [vehiclename, setVehicleName] = useState('')
    const [fueltype, setFuelType] = useState('')
    const [regnumber, setRegNumber] = useState('')
    const [seats, setSeating] = useState('')
    const [cost, setCost] = useState('')
    
    


    const navigate = useNavigate()

    const signup = () => {

        if (vehicletype.length === 0) {
            toast.error('please enter first name')
        } else if (vehiclename.length === 0) {
            toast.error('please enter last name')
        } else if (fueltype.length === 0) {
            toast.error('please enter email')
        } else if (regnumber.length === 0) {
            toast.error('please enter phone number')
        } else if (fueltype.length === 0) {
            toast.error('please enter password')
        }else if (cost.length === 0) {
                toast.error('please enter password')
        } else {

            axios
                .post(config.serverURL + '/user/signup', {
                    vehicletype,
                    vehiclename,
                    regnumber,
                    seats,
                    fueltype,
                    
                })
                .then((response) => {
                    // get the data returned by server
                    const result = response.data

                    // check if user's authentication is successfull
                    if (result['status'] === 'error') {
                        toast.error('invalid email or password')
                    } else {
                        toast.success('successfully registered a new user')

                        // navigate to the singin page
                        navigate('/signin')
                    }
                })
                .catch((error) => {
                    console.log('error')
                    console.log(error)
                })
        }
    }

    return (

        <div style={{ marginTop: 100 }}>
            <div style={styles.container}>

                <div className='mb-3'>
                    <label>Vehicle Type</label>
                    <div onChange={(event) => {
                        setVehicleType(event.target.value)
                    }}>
                        <input type="radio" value="Bike" name="vehicle" /> Bike &nbsp;&nbsp;
                        <input type="radio" value="Car" name="vehicle" /> Car
                    </div>
                </div>

                <div className='mb-3'>
                    <label>Vehicle Name</label>
                    <input
                        onChange={(event) => {
                            setVehicleName(event.target.value)
                        }}
                        className='form-control'
                        type='text'
                    />
                </div>

                <div className='mb-3'>
                    <label>Registration Number</label>
                    <input
                        onChange={(event) => {
                            setRegNumber(event.target.value)
                        }}
                        className='form-control'
                        type='text'
                    />
                </div>

                <div className='mb-3'>
                    <label>Seating capacity</label>
                    <input
                        onChange={(event) => {
                            setSeating(event.target.value)
                        }}
                        className='form-control'
                        type='number'
                    />
                </div>

                <div className='mb-3'>
                    <label>Cost per Hour</label>
                    <input
                        onChange={(event) => {
                            setCost(event.target.value)
                        }}
                        className='form-control'
                        type='number'
                    />
                </div>

                <div className='mb-3'>
                    <label>Fuel Type</label>
                    <div onChange={(event) => {
                        setFuelType(event.target.value)
                    }}>
                        <input type="radio" value="Petrol" name="fuel" /> Petrol &nbsp;&nbsp;
                        <input type="radio" value="Diesel" name="fuel" /> Diesel
                    </div>
                </div>
   
                <div className='mb-3' style={{ marginTop: 20 }}>
                    
                    <button onClick={signup} style={styles.signinButton}>
                        Add Vehicle
                    </button>
                </div>
            </div>
        </div>


    )
}

const styles = {
    container: {
        width: 400,
        height: 550,
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

export default AddVehicle

