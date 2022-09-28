import { MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox } from 'mdb-react-ui-kit';
import React from 'react';
import videoBg from '../../video/carTreeVideo1.mp4'
import '../styles/home.css'
import Login from './../Login';

const Home = () => {
  return (
<div>

        <div className='main'>
          <video src={videoBg} autoPlay loop muted />
          <div className='content'>
            <h1> " Welcome to Lets Ride "</h1>
            <a href='/Login1'>
              <button style={styles.Button}> Start Exploring</button>
            </a>

          </div>
        </div>

        <div>
          <img src=''/>
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
      Button: {
        position: 'relative',
      width: 150,
      height: 60,
      backgroundColor: '#db0f62',
      color: 'white',
      borderRadius: 20,
      border: 'none',
      marginTop: 10,
  },
}

      export default Home