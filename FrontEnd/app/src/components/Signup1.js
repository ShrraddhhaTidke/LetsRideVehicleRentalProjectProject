import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { ToastContainer, toast } from 'react-toastify';
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


const Signin = () => {

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

    const signup = () => {

        if (firstName.length === 0) {
            toast.error('please enter first name')
        } else if (lastName.length === 0) {
            toast.error('please enter last name')
        } else if (email.length === 0) {
            toast.error('please enter email')
        } else if (phone.length === 0) {
            toast.error('please enter phone number')
        } else if (password.length === 0) {
            toast.error('please enter password')
        } else if (confirmPassword.length === 0) {
            toast.error('please confirm password')
        } else if (password !== confirmPassword) {
            toast.error('password does not match')
        } else {

            axios
                .post('http://localhost:8080/api/user', {
                    firstName,
                    lastName,
                    dlNo,
                    email,
                    password,
                    phone,
                    dLExpiryDate,
                })
                .then((response) => {
                    // get the data returned by server
                    const result = response.data

                    // check if user's authentication is successfull
                    if (result['status'] === 'error') {
                        toast.error('invalid email or password')
                    } else {
                        toast.success('successfully registered a new user')
                        sessionStorage['token'] = result['data']['token']

                        // navigate to the singin page
                        navigate('/login1')
                    }
                })
                .catch((error) => {
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

                            <MDBCol md='10' lg='6' className='order-1 order-lg-1 d-flex align-items-center'>
                                <MDBCardImage style={{ borderRadius: '10px' }} src='https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80' fluid />
                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-2 order-lg-2 d-flex flex-column align-items-center'>

                                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"><h2><b>Let's</b> Sign Up</h2></p>

                                <MDBRow>

                                    <MDBCol>
                                        <div className="d-flex flex-row align-items-center mb-4 ">
                                            <MDBIcon fas icon="user me-3" size='lg' />
                                            <MDBInput label='First Name' id='form1' type='text' className='w-100'
                                                onChange={(event) => {
                                                    setFirstName(event.target.value)
                                                }} />
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4 ">
                                            <MDBIcon fas icon="user me-3" size='lg' />
                                            <MDBInput label='Last Name' id='form2' type='text' className='w-100'
                                                onChange={(event) => {
                                                    setLastName(event.target.value)
                                                }} />
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <MDBIcon fas icon="envelope me-3" size='lg' />
                                            <MDBInput label='Email' id='form3' type='email'
                                                onChange={(event) => {
                                                    setEmail(event.target.value)
                                                }} />
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <MDBIcon fas icon="address-book me-3" size='lg' />
                                            <MDBInput label='Mobile No' id='form4' type='phone'
                                                onChange={(event) => {
                                                    setPhone(event.target.value)
                                                }} />
                                        </div>
                                    </MDBCol>

                                    <MDBCol>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <MDBIcon fas icon="address-book me-3" size='lg' />
                                            <MDBInput label='Driving License No. ' id='form5' type='W-14'
                                                onChange={(event) => {
                                                    setLicenseNo(event.target.value)
                                                }} />
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <MDBIcon fas icon="address-book me-3" size='lg' />
                                            <MDBInput label='Driving License Expiry Date ' id='form6' type='date'
                                                onChange={(event) => {
                                                    setLicensValidity(event.target.value)
                                                }} />
                                        </div>


                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <MDBIcon fas icon="lock me-3" size='lg' />
                                            <MDBInput label='Password' id='form7' type='password' 
                                                onChange={(event) => {
                                                    setPassword(event.target.value)
                                                }} />
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <MDBIcon fas icon="key me-3" size='lg' />
                                            <MDBInput label='Repeat your password' id='form8' type='password'
                                                onChange={(event) => {
                                                    setConfirmPassword(event.target.value)
                                                }} />
                                        </div>

                                    </MDBCol>

                                </MDBRow>

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

                                <MDBBtn className='mb-4' color='dark' size='md' onClick={signup}>Register</MDBBtn>

                                <div>
                                    <p classclassName="mb-4">Already have an Account ?
                                        <Link to='/login1'>Login </Link>

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

export default Signin





