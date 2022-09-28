import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { ToastContainer, toast } from 'react-toastify';
import config from '../config';
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


const Login1 = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dlNo, setLicenseNo] = useState('')
    const [dLExpiryDate, setLicensValidity] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [verified, setVerified] = useState(false)
    const [captcha, setCaptcha] = useState('')
    const [user, setUser] = useState({
        username: ""
    });

    const navigate = useNavigate()

    useEffect(() => {
        loadCaptchaEnginge(6, "#778899");
    }, [])

    const sup = () => {

        if (email.length === 0) {
            toast.error('please enter email')
        } else if (password.length === 0) {
            toast.error('please enter password')
        }
        else {
            axios
                .post(config.serverURL + '/api/user/signin'
                    , {
                        email,
                        password,
                    }
                )
                .then((response) => {
                    const result = response.data


                    if (result['status'] === 'error') {
                        toast.error('invalid email or password')
                    } else {

                        sessionStorage['jwt'] = result['data']['jwt']
                        sessionStorage.setItem('user', JSON.stringify(result))
                        sessionStorage.setItem('isLoggedIn', true)

                        toast.success('welcome to Lets Ride')
                        navigate('/bookvehicle')

                    }
                }).catch((error) => {
                    console.log('error')
                    console.log(error)
                })
        }

    }


    return (
        <div>

            <MDBContainer >

                <MDBCard className='text-black m-4' style={{ borderRadius: '10px' }}>
                    <MDBCardBody>
                        <MDBRow>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage style={{ borderRadius: '10px' }} src='https://hips.hearstapps.com/hmg-prod/images/gettyimages-909040892-1535400758.jpg?resize=1200:*' fluid />
                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"><h2><b>Let's</b> Log In</h2></p>



                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size='lg' />
                                    <MDBInput label='Email' id='form2' type='email'
                                        onChange={(event) => {
                                            setEmail(event.target.value)
                                        }} />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="lock me-3" size='lg' />
                                    <MDBInput label='Password' id='form3' type='password' pattern='((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5-20})'
                                        onChange={(event) => {
                                            setPassword(event.target.value)
                                        }} />
                                </div>



                                <div style={{ margin: 'auto', marginTop: 20 }}>
                                    <div className="mb-4" >
                                        < LoadCanvasTemplate style={{ margin: 'auto', marginTop: 20 }} />

                                        <MDBInput label='Enter Captcha' id='cpt' type='password' required onChange={(event) => {
                                            setCaptcha(event.target.value)
                                        }} />
                                        {/* <input type="text" class="form-control" placeholder="Enter Captcha" id="cpt" name="captcha" required onChange={(event) => {
                                            setCaptcha(event.target.value)
                                        }} /> */}
                                    </div>
                                </div>

                                {/* <div className='mb-4'>
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                                </div> */}

                                <MDBBtn className='mb-4' color='dark' size='md' onClick={sup}>Login </MDBBtn>

                                <div>
                                    <p classclassName="mb-4">Don't have an Account ?
                                        <Link to='/signup1'>Signup  </Link>

                                    </p>
                                </div>

                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>

        </div>
    )
}

export default Login1





