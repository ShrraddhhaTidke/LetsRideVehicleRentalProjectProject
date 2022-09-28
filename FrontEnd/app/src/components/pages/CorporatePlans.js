//import './Login.css'
import { useEffect, useState } from 'react'
import axios from "axios";

//for captcha
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


const CorporatePlans= () => {
  //to maintain the state use useState hook
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  // const history = useHistory()
  // const dispatch = useDispatch();
  useEffect(()=>{
    loadCaptchaEnginge(6,"red");          //captcha pattern(digit,color)
  },[])

  const LoginUser = () => {
    if (validateCaptcha(captcha)==false) {
      alert('Captcha does not Matched');
      return;
    }
   
  }

  return (
  

    <div className="container">
<div className ="container-fluid pt-3 p-1 my-3  bg-success text-white">

<h1 style={{ textAlign: "center", fontFamily: "redressed georgia garamond serif" }}>eRTO System</h1>
<p style={{ textAlign: "center", fontFamily: "redressed georgia garamond serif" }}>Welcome to the eRTO System.The place where transparency is the main moto.</p>
</div>


<nav className="navbar navbar-expand-sm sticky-top bg-dark navbar-dark">
  <ul className="navbar-nav">
    <li className="nav-item ">
      <a className="nav-link "  href='/'>Home</a>
    </li>
    <li className="nav-item  "><a className="nav-link" href="#faq">FAQ</a></li>
					<li className="nav-item "><a className="nav-link" href="#aboutus">About Us</a></li>
					<li className="nav-item"><a className="nav-link " href="#contactus">Contact
						Us</a></li>
    </ul>
   
   {/* <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <a className="nav-link"  href='/user/login'><button type="button" class="btn btn-outline-light my-2 my-sm-0">Login</button></a>
    </li>
    
  </ul> */}
</nav>


<hr />
	{/* <h6 align="center" class="text-success">${requestScope.message}</h6> */}
	
	
	<div className="row">
  <div className="col"></div>
  
  <div className="col">

  <div className="card bg-light" style={{width:"500px",height:"400px"}}>
  
 
    <div className="card-header text-body" style={{ textAlign: "center", fontFamily: "redressed georgia garamond serif" }}><h4>Login</h4></div>
   
    <div className="card-body" >
    
	
	
  <div className="form-group">
    <label for="email">Email Id :</label>
    <input type="email" class="form-control" placeholder="Enter email" id="email" name="email" required onChange={(event) => {//able to type something in textbox : event get generated
             setEmail(event.target.value)
           }}/>
  </div>
  <div className="form-group">
    <label for="password">Password:</label>
    <input type="password" class="form-control" placeholder="Enter password" id="password" name="password" required  onChange={(event) => {
             setPassword(event.target.value)
           }} />
  </div>
  <div className="form-group">
  < LoadCanvasTemplate /> 


    <label for="password">Enter Captcha:</label>
    <input type="text" class="form-control" placeholder="Enter Captcha" id="cpt" name="captcha" required  onChange={(event) => {
             setCaptcha(event.target.value)
           }} />
  </div>

  
  <button  className="btn btn-primary mx-auto d-block"  value="Login" onClick={LoginUser}>Login</button>
  
  <p class="text-body" style={{textAlign:"center"}}> <br /><a href='/user/forgot' class="text-primary" style={{textDecoration:"underline"}}>Forgot Password</a> Not Registered ? <a href='/user/register' class="text-primary" style={{textDecoration:"underline"}}>Create an account</a></p>


	</div>
	</div>
	</div>
	

	
	<div class="col"></div>
</div>
</div>
  )
}

export default CorporatePlans
