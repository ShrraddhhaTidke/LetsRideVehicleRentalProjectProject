import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import config from '../../config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { screen } from '@testing-library/react';

const AddEmployee = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [LicenseNo, setLicenseNo] = useState('')
    const [LicenseValidity, setLicensValidity] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [role, setRole] = useState('')


    const navigate = useNavigate()

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
                .post(config.serverURL + '/user/signup', {
                    firstName,
                    lastName,
                    email,
                    LicenseNo,
                    LicenseValidity,
                    password,
                    phone,
                    role,
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
                    <label>Select Role &nbsp;</label>
                    <select name="role" id="role"
                        onChange={(event) => {
                            setRole(event.target.value)
                        }}>
                        <option value="Manager">Manager</option>
                        <option value="staff">staff</option>
                    </select>
                </div>

                <div className='mb-3'>
                    <label>First Name</label>
                    <input
                        onChange={(event) => {
                            setFirstName(event.target.value)
                        }}
                        className='form-control'
                        type='text'
                    />
                </div>

                <div className='mb-3'>
                    <label>Last Name</label>
                    <input
                        onChange={(event) => {
                            setLastName(event.target.value)
                        }}
                        className='form-control'
                        type='text'
                    />
                </div>

                <div className='mb-3'>
                    <label>Phone Number</label>
                    <input
                        onChange={(event) => {
                            setPhone(event.target.value)
                        }}
                        className='form-control'
                        type='tel'
                    />
                </div>

                <div className='mb-3'>
                    <label>Email</label>
                    <input
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                        className='form-control'
                        type='email'
                    />
                </div>

                <div className='mb-3'>
                    <label>License Number</label>
                    <input
                        onChange={(event) => {
                            setLicenseNo(event.target.value)
                        }}
                        className='form-control'
                        type='text'
                    />
                </div>

                <div className='mb-3'>
                    <label>License Validity</label>
                    <input
                        onChange={(event) => {
                            setLicensValidity(event.target.value)
                        }}
                        className='form-control'
                        type='date'
                    />
                </div>

                <div className='mb-3'>
                    <label>Password</label>
                    <input
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }}
                        className='form-control'
                        type='password'
                    />
                </div>

                <div className='mb-3'>
                    <label>Confirm Password</label>
                    <input
                        onChange={(event) => {
                            setConfirmPassword(event.target.value)
                        }}
                        className='form-control'
                        type='password'
                    />
                </div>

                <div className='mb-3' style={{ marginTop: 20 }}>
                    <button onClick={signup} style={styles.signinButton}>
                        Add Employee
                    </button>
                </div>
            </div>
        </div>


    )
}

const styles = {
    container: {
        width: 400,
        height: 770,
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

export default AddEmployee

