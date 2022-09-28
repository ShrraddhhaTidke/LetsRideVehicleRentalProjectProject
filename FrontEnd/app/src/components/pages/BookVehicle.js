import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import config from '../../config'
import { toast } from 'react-toastify'
import imgg from '../../captcha/indiamap.jpg'
import { useNavigate } from 'react-router-dom'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

const BookVehicle = () => {
    // get user inputs

    const [categoryName, setVehicleType] = useState('')
    const [city, setCity] = useState('')

    let count = 1;

    useEffect(() => {
        count++;
    }, [count])

    // get the navigate function reference
    const navigate = useNavigate()

    const signin = () => {
        // check if user has really entered any value
        if (city.length === 0) {
            toast.error('Please enter City')
        } else if (categoryName.length === 0) {
            toast.error('Please enter Vehicle Type')
        } else {


            toast.success('Fetching Available Rides')
            navigate(`/vehicleListing/${city}/${categoryName}`)

        }



        // axios
        //     .get(config.serverURL + `/home/vehicles`, {
        //         city,
        //         categoryName,

        //     })
        //     .then((response) => {

        //         const result = response.data
        //         if (result['status'] === 'error') {
        //             toast.error('invalid email or password')
        //         } else {

        //         }
        //     })
        //     .catch((error) => {
        //         console.log('error')
        //         console.log(error)
        //     })
    }


    return (

        <div> <MDBContainer >

            <MDBCard className='text-black m-4' style={{ borderRadius: '10px' }}>
                <MDBCardBody>
                    <MDBRow>

                    <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage style={{ borderRadius: '10px' }} src={imgg} fluid />
                            </MDBCol>

                    <MDBCol md='10' lg='6' className=' order-2 order-lg-1 d-flex flex-column align-items-center'>
                        <div style={{ marginTop: 100 }}>
                            <div  style={styles.container}>

                                
                                <div className="mb-3">
                                    <label><b>Select Current City &nbsp;</b></label>
                                    <select name="city" id="city"
                                        onChange={(event) => {
                                            setCity(event.target.value)
                                        }}>
                                        <option value="">-- Select City --</option>
                                        <option value="Pune">Pune</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Nashik">Nashik</option>
                                    </select>
                                </div>
                                

                                <div className='mb-3 '>
                                    <label><b>Select Vehicle Type &nbsp;</b></label>
                                    <select name="city" id="city"
                                        onChange={(event) => {
                                            setVehicleType(event.target.value)
                                        }}>
                                        <option value="">-- Select Vehicle Type --</option>
                                        <option value="Hatchback">Hatchback</option>
                                        <option value="SUV">SUV</option>
                                        <option value="Sedan">Sedan</option>
                                    </select>
                                </div>

                                <div className='mb-3' style={{ marginTop: 20 }}>
                                    
                                    <button onClick={signin} style={styles.signinButton}>
                                        Show Rides
                                    </button>
                                </div>
                            </div>
                        </div>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
        </div>
    )
}

const styles = {
    container: {
        width: 400,
        height: 190,
        padding: 20,
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        marginBottom: 100,
        borderColor: 'grey',
        borderRadius: 10,
        broderWidth: 1,
        borderStyle: 'solid',
        boxShadow: '1px 1px 20px 5px #C9C9C9',
    },
    signinButton: {
        position: 'relative',
        width: '100%',
        height: 40,
        backgroundColor: '#000000',
        color: 'white',
        borderRadius: 5,
        border: 'none',
        marginTop: 10,
    },
}

export default BookVehicle
