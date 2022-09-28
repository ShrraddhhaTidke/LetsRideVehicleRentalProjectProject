import { Link, useNavigate } from 'react-router-dom'
import ShowVehicles from './../pages/ShowVehicles';
import { useSelector } from 'react-redux';


const Navbar = () => {

  const navigate = useNavigate()

  
  const LoggedIn = sessionStorage.getItem("isLoggedIn");

  console.log(LoggedIn)



  return (
    <nav
      style={{ backgroundColor: '#000000' }}

      className='navbar navbar-expand-lg navbar-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/home'>
          <i class="ri-roadster-fill"></i>
          &nbsp; &nbsp;<h3>Let's Ride</h3>
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>

            {LoggedIn && (
            <li className='nav-item'>
              <Link
                className='nav-link active'
                aria-current='page'
                to='/subscription'>
                Subcription
              </Link>
            </li>
            )}

            {LoggedIn && (
            <li className='nav-item'>
              <Link
                className='nav-link active'
                aria-current='page'
                to='/corporate-plans'>
                Corporate Plans
              </Link>
            </li>
            )}

           {LoggedIn && (
            <li className='nav-item'>
              <Link
                className='nav-link active'
                aria-current='page'
                to='/bookvehicle'>
                Book Ride
              </Link>
            </li>
            )}
            </ul>

            {/* <li className='nav-item'>
              <Link
                className='nav-link active'
                aria-current='page'
                to='/showVehicles'>
                Show Vehicles
              </Link>
            </li> */}


            {/* <li className='nav-item'>
              <Link
                className='nav-link active'
                aria-current='page'
                to='/addvehicle'>
                Add Vehicle
              </Link>
            </li> */}

            
            {/* <li className='nav-item'>
              <Link
                className='nav-link active'
                aria-current='page'
                to='/addemployee'>
                Add Employee
              </Link>
            </li> */}
            

            {/* <li className='nav-item'>
              <Link
                className='nav-link active'
                aria-current='page'
                to='/vehicles'>
                Vehicles
              </Link>
            </li> */}

            {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> */}

            <ul className='navbar-nav me-right mb-2 mb-lg-0'>

            
            {!LoggedIn && (
            <li className='nav-item ' >
              <Link
                className='nav-link active'
                aria-current='page'
                to='/login1'>
                Login/Signup
              </Link>
            </li>
            )}

            {LoggedIn && (
            <button
            style={{ textDecoration: 'none', color: 'white' }}
            onClick={() => {
              navigate('/login1')

              // send the action to let the user signout
              sessionStorage.clear()
            }}
            className='btn btn-link'
            aria-current='page'>
            Signout
          </button>
            )}

            </ul>
          {/* </ul> */}

        </div>
      </div>
    </nav>
  )
}

export default Navbar