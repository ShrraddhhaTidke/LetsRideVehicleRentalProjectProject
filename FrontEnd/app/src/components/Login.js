import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import config from '../config'
import { ToastContainer, toast } from 'react-toastify';
import captchaImg from '../captcha/capback.jpg'

import { useNavigate } from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha"
import { alignPropType } from 'react-bootstrap/esm/types';
import { useEffect } from 'react';

import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useDispatch } from 'react-redux';


const Login = () => {
  // get user inputs

  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captcha, setCaptcha] = useState('');
  const [verified, setVerified] = useState(false);
  const [user, setUser] = useState({
    username: ""
  });

  useEffect(()=>{
    loadCaptchaEnginge(6,"#778899");          //captcha pattern(digit,color)
  },[])

  


  // get the navigate function reference
  const navigate = useNavigate()

  // function onChange(value) {
  //   console.log("Captcha value:", value);
  //   setVerified(true);
  // }

  // const characters = 'abc123';
  // function generateString(length) {
  //   var result = '';
  //   const charactersLength = characters.length;
  //   for (let i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }
  //   return result;
  // }

  // const captcha = generateString(6)

  // let handleChange = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   user[name] = value;
  //   setUser(user)
    
  // } 

  const signin = () => {
    // check if user has really entered any value


      if (email.length === 0) {
        toast.error('please enter email')
      } else if (password.length === 0) {
        toast.error('please enter password')
      } 
      // else if (captcha != user.username){
      //   toast.error('Enter valid captcha')
      // } 
      else
      {
        // make the API call to check if user exists
        axios
          .post(config.serverURL + '/api/user/signin'
          , {
            email,
            password,
          }
          )
          .then((response) => {
            // get the data returned by server
            const result = response.data

            // check if user's authentication is successfull
            if (result['status'] === 'error') {
              toast.error('invalid email or password')
            } else {

              // dispatch(setUser(result))

              sessionStorage.setItem('user', JSON.stringify(result))
              sessionStorage.setItem('isLoggedIn', true)

              toast.success('welcome to Lets Ride')
              navigate('/bookvehicle')


              // const user = result['data']
              // dispatch(signin(user))




            //   // localStorage
            //   // - built-in javascript object
            //   // - used to store something (key-value pairs)
            //   // - will NOT be cleared untill the keys get removed explicitly

            //   // sessionStorage
            //   // - built-in javascript object
            //   // - used to store something (key-value pairs)
            //   // - will be cleared automatically after the session gets killed

            //   // get the token from response and save it in sessionStorage
            //   // const token = result.data.token
            //   sessionStorage['token'] = result['data']['token']
            //   sessionStorage['username'] = result['data']['name']

              
            }
          }).catch((error) => {
            console.log('error')
            console.log(error)
          })
      }    
  } 

  return (
    <div style={{ marginTop: 100 }}>
      <div style={styles.container}>
        <div className='mb-3'>
          <label>Email</label>
          <input
            onChange={(event) => {
              setEmail(event.target.value)
            }}
            className='form-control'
            type='Email'
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
        <div className='mb-3' style={{ marginTop: 20 }}>
          <div>
            <b>Don't have an account yet ?</b> <Link to='/signup'>Signup here</Link>
          </div>

          {/* <div className='mb-3' style={{ marginTop: 20, marginLeft: 25 }}>
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />
          </div> */}




          {/* <div class="form-group row">
            <div class="col-md-8">
              <h4 id="captcha" style={{ marginTop: "25px", marginLeft: "120px", position: "absolute" }}>{captcha}</h4>
              
              <img src={captchaImg} className="mt-3 mb-3" height="50" style={{ marginLeft: "100px" }} />


              <input type="text" id="inputType" className="form-control" placeholder="Enter Captcha"
                name="username" onChange={handleChange} style={{ width: "70%", marginLeft: "100px" }}
              />
            </div>
          </div> */}


           <div style={{margin: 'auto', marginTop: 20}}>
              <div className="form-group" >
              < LoadCanvasTemplate style={{margin: 'auto', marginTop: 20}}  /> 

               <input type="text" class="form-control" placeholder="Enter Captcha" id="cpt" name="captcha" required  onChange={(event) => {
              setCaptcha(event.target.value)
                  }} />
              </div>
            </div>

          <button onClick={signin} style={styles.signinButton}>
            Signin
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: 400,
    height: 400,
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

export default Login






// import 'bootstrap/dist/css/bootstrap.min.css';
// import captchaImg from './captcha.jpg';
// import studentIMG from './2.png';
// import React, { useState, useEffect } from 'react';
// function Captcha() {
//   const [user, setUser] = useState({
//       username:""
//   });
//   const characters ='abc123';
//   function generateString(length) 
//   {
//       let result = '';
//       const charactersLength = characters.length;
//       for ( let i = 0; i < length; i++ ) {
//           result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       }
//      return result;
//    }
//    const captcha = generateString(6) // Function called here and save in captcha variable
//    let handleChange = (e) => {
//      let name = e.target.name;
//      let value = e.target.value;
//      user[name] = value;
//      setUser(user);
//   }
//   const onSubmit = e => {
//     var element =  document.getElementById("succesBTN");
//     var inputData = document.getElementById("inputType");
//      element.style.cursor = "wait";
//      element.innerHTML  = "Checking...";
//      inputData.disabled = true;
//      element.disabled = true;
//       var myFunctions = function(){
//           if(captcha == user.username)
//           {
//             element.style.backgroundColor   = "green";
//             element.innerHTML  = "Captcha Verified";
//             element.disabled = true;
//             element.style.cursor = "not-allowed";
//             inputData.style.display = "none";
            
//           }
//           else
//           {
//             element.style.backgroundColor   = "red";
//             element.style.cursor = "not-allowed";
//             element.innerHTML  = "Not Matched";
//             element.disabled = true;
//             //  element.disabled = true;
//             var myFunction = function(){
//               element.style.backgroundColor   = "#007bff";
//               element.style.cursor = "pointer";
//               element.innerHTML  = "Verify Captcha";
//               element.disabled = false;
//               inputData.disabled = false;
//               inputData.value ='sssss';
//             };
//             setTimeout(myFunction,5000);
//           }
//         }   
//         setTimeout(myFunctions,5000); 
//   };
  
//    return (
//     <div class="container">
//       <h4 className="text-center mt-4 text-info"><b> Validate Captcha using REACT JS</b></h4>
//       <div class="row mt-4">
//           <div class="col-md-4">
//           </div>
         
//           <div class="col-md-8">
//             <h4 id="captcha" style={{ marginTop:"162px",marginLeft:"25px",position:"absolute"}}>{captcha}</h4>
            
//             <div class="form-group row">
//               <img src={studentIMG} className="mt-3 mb-3" height="90"/> <span class="font-weight-bold ml-3"  style={{ marginTop:"50px"}} >Mariah Benchos</span>
//             </div>
//             <div class="form-group row">
//               <img src={captchaImg} className="mt-3 mb-3" height="50"/> 
//             </div>
//             <div class="form-group row">
//               <input type="text" id="inputType" className="form-control"placeholder="Enter Captcha"
//                 name="username"  onChange={handleChange} autocomplete="off" style={{width:"20%"}}
//                 />
//               <button type="button" id="succesBTN" onClick={onSubmit} class="btn btn-primary ml-1">Verify Captcha</button>
            
//             </div>
        
//            </div>
//         </div>
//       </div>
//     );
// }
// export default Captcha;



