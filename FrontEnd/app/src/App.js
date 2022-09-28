import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer";
import Routers from "./components/routers/Routers";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routers />
    <Footer />
    <ToastContainer position='top-center' autoClose={1000} />
    </BrowserRouter>
    
  )
}

export default App;
