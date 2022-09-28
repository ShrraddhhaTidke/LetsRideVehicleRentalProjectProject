import React from "react"
import { useSelector } from "react-redux"
import { Col, Container, Row } from "reactstrap"
import img from '../../captcha/cars1.jpg'

const VehicleComponent = () => {

    const vehicles = useSelector((state) => state.allVehicles.vehicles)
    const renderList = vehicles.map((vehicle) => {
        const { vehicle_id, title, imagePath
            , rentPerDay, transmission, brand, model, fuel } = vehicle

        return (
            <div className='container'>
                <div style={{}} className='row'>
                    <div
                        className='card col col-1'
                        style={{
                            margin: 5,
                            position: "relative",
                            height: 210,
                            paddingTop: 10,
                            paddingBottom: 10,
                            width: 570,
                            display: 'inline-block',

                        }}>

                        <div className='card-body'>
                            <Container>
                                <Row>
                                    <Col>
                                        <img style={{ height: 160, width: 280, display: 'block',  borderRadius: 5 }} src={imagePath} />
                                    </Col>
                                    <Col>
                                        <p className='card-text'>
                                            <tr><td><h5 className='card-title' key={vehicle_id}>{brand}</h5></td><td rowSpan={2} marginLeft='35'> &nbsp;&nbsp;<a href={`/vehicles/${vehicle_id}`}>
                                                <button style={styles.Button}> Book</button></a></td></tr>
                                            <tr><td><p className='card-text'>{model}</p></td></tr>
                                            
                                        
                                        </p>
                                        <p className='card-text'>
                                            <tr><td>transmission :&nbsp;</td><td><b>{transmission}</b></td><td></td></tr>
                                            <tr><td>fuel :&nbsp;</td><td><b>{fuel}</b></td><td></td></tr>
                                            <tr><td>Per Day :&nbsp;</td><td><b>{rentPerDay}</b></td><td></td></tr>
                                        </p>
                                    </Col>
                                </Row>
                            </Container>

                        </div>
                    </div>
                </div>
            </div>

        )
    })


    return <div><>{renderList}</></div>

}

const styles = {
    Button: {
        position: 'relative',
        width: 75,
        height: 40,
        padding: 10,
        backgroundColor: '#db0f62',
        color: 'white',
        borderRadius: 5,
        border: 'none',
        marginTop: 10,
        marginLeft: 22,
    }
}

export default VehicleComponent
