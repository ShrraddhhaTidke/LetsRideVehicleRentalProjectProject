import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import config from '../config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import captchaImg from '../captcha/capback.jpg'
import ReCAPTCHA from 'react-google-recaptcha'
import { screen } from '@testing-library/react';

const Signup = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [dlNo, setLicenseNo] = useState('')
  const [dLExpiryDate, setLicensValidity] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [verified, setVerified] = useState(false)
  const [user, setUser] = useState({
    username: ""
  });


  const navigate = useNavigate()

  // function onChange(value) {
  //   console.log("Captcha value:", value);
  //   setVerified(true);
  // }

  const characters = 'abc123';
  function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const captcha = generateString(6)

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    user[name] = value;
    setUser(user);
  }



  const sup = () => {

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

            // navigate to the singin page
            navigate('/login')
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
          <div>
            Already have an account? <Link to='/login'>Login here</Link>
          </div>

          {/* <div className='mb-3' style={{ marginTop: 20, marginLeft: 25 }}>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />
          </div> */}



          <div class="form-group row">
            <div class="col-md-8">
              <h4 id="captcha" style={{ marginTop: "25px", marginLeft: "120px", position: "absolute" }}>{captcha}</h4>
              <img src={captchaImg} className="mt-3 mb-3" height="50" style={{ marginLeft: "100px" }} />
              <input type="text" id="inputType" className="form-control" placeholder="Enter Captcha"
                name="username" onChange={handleChange} autocomplete="off" style={{ width: "70%", marginLeft: "100px" }}
              />
            </div>
          </div>

          <button onClick={sup} style={styles.signinButton} >
            Signup
          </button>

        </div>
      </div>
    </div>




  )
}

const styles = {
  container: {
    width: 400,
    height: 870,
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

export default Signup

