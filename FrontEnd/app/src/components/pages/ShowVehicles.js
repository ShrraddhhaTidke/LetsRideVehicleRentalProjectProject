import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import config from '../../config'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const ShowVehicles = () => {
    // get user inputs
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [Vehicle, setVehicleType] = useState('')
    const [city, setCity] = useState('')



    // get the navigate function reference
    const navigate = useNavigate()

    const signin = () => {
        // check if user has really entered any value
        if (startDate.length === 0) {
            toast.error('please enter StartDate')
        } else if (endDate.length === 0) {
            toast.error('please enter EndDate')
        } else {
            // make the API call to check if user exists
            axios
                .post(config.serverURL + '/user/signin', {
                    Vehicle,
                    city,
                    startDate,
                    endDate,
                })
                .then((response) => {
                    // get the data returned by server
                    const result = response.data

                    // check if user's authentication is successfull
                    if (result['status'] === 'error') {
                        toast.error('invalid email or password')
                    } else {
                        // localStorage
                        // - built-in javascript object
                        // - used to store something (key-value pairs)
                        // - will NOT be cleared untill the keys get removed explicitly

                        // sessionStorage
                        // - built-in javascript object
                        // - used to store something (key-value pairs)
                        // - will be cleared automatically after the session gets killed

                        // get the token from response and save it in sessionStorage
                        // const token = result.data.token
                        sessionStorage['token'] = result['data']['token']
                        sessionStorage['username'] = result['data']['name']

                        toast.success('welcome to Lets Ride')
                        navigate('/home')
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
                    <label>Select City &nbsp;</label>
                    <select name="city" id="city"
                        onChange={(event) => {
                            setCity(event.target.value)
                        }}>
                        <option value="All">All</option>    
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Nashik">Nashik</option>
                    </select>
                </div>

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
                    <label>Booking Status</label>
                    <div onChange={(event) => {
                            setVehicleType(event.target.value)
                        }}>
                        <input type="radio" value="All" name="BookingStatus" /> All &nbsp;&nbsp;
                        <input type="radio" value="Booked" name="BookingStatus" /> Booked &nbsp;&nbsp;
                        <input type="radio" value="Unbooked" name="BookingStatus" /> Unbooked
                    </div>
                </div>
                
                <div className='mb-3' style={{ marginTop: 20 }}>
                    <button onClick={signin} style={styles.signinButton}>
                        Show Vehicles
                    </button>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        width: 400,
        height: 280,
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

export default ShowVehicles
