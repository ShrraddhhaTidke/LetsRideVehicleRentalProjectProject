import React, { useEffect } from "react";
import { Component } from "react"
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectedVehicles, removeSelectedVehicle } from "../Redux/actions/VehicleActions";
import { useSelector } from 'react-redux';
import img from '../../captcha/cars1.jpg'



const VehicleDetails = () => {

    const vehicle = useSelector((state) => state.vehicle)
    const { id, title, imagePath, rentPerDay, transmission, brand, model, fuel, categoryName, cappacity } = vehicle

    const { productId } = useParams();
    const dispatch = useDispatch();

    console.log(vehicle)

    const fetchVehicleDetail = async () => {
        const response = await axios.get(`http://localhost:8080/home/vehicles/${productId}`)
            .catch((err) => {
                console.log("Err", err);
            })

        dispatch(selectedVehicles(response.data));

        const selVehicle = response.data

        sessionStorage.setItem("selVehicle", JSON.stringify(selVehicle))
    }

    useEffect(() => {
        if (productId && productId !== "") fetchVehicleDetail();
        return() => {
            dispatch(removeSelectedVehicle())
        }

    }, [productId])





    // useEffect(() => {
    //     axios.get('http://dummyjson.com/products/1' )
    //         .then(response => {console.log(response.data) })
    // }, [])

    return (
        <div>
            <div title={title}>
                <section>
                    <Container>
                        <Row>
                            <Col lg="6">
                                <img src={imagePath} alt="" className="w-100" />
                            </Col>

                            <Col lg="6">
                                <div className="car__info">
                                    <h2 className="section__title">{brand}</h2>
                                    <p className="section__description">
                                        <h4>{model}</h4>
                                    </p>

                                    <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                                        <h6 className="rent__price fw-bold fs-4">
                                            ${rentPerDay}.00 / Day
                                        </h6>

                                        <span className=" d-flex align-items-center gap-2">
                                            <span style={{ color: "#f9a826" }}>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                                <i class="ri-star-s-fill"></i>
                                            </span>
                                            ({rentPerDay} ratings)
                                        </span>
                                    </div>                                    

                                    <div
                                        className=" d-flex align-items-center mt-3"
                                        style={{ columnGap: "4rem" }}
                                    >
                                        <span className=" d-flex align-items-center gap-1 section__description">
                                            <i
                                                class="ri-roadster-line"
                                                style={{ color: "#f9a826" }}
                                            ></i>{" "}
                                            {transmission}
                                        </span>

                                        <span className=" d-flex align-items-center gap-1 section__description">
                                            <i
                                                class="ri-settings-2-line"
                                                style={{ color: "#f9a826" }}
                                            ></i>{" "}
                                            {categoryName}
                                        </span>

                                        <span className=" d-flex align-items-center gap-1 section__description">
                                            <i
                                                class="ri-timer-flash-line"
                                                style={{ color: "#f9a826" }}
                                            ></i>{" "}
                                            {fuel}
                                        </span>
                                    </div>

                                    <div
                                        className=" d-flex align-items-center mt-3"
                                        style={{ columnGap: "2.8rem" }}
                                    >
                                        <span className=" d-flex align-items-center gap-1 section__description">
                                            <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                                            {cappacity}
                                        </span>

                                        <span className=" d-flex align-items-center gap-1 section__description">
                                            <i
                                                class="ri-wheelchair-line"
                                                style={{ color: "#f9a826" }}
                                            ></i>{" "}
                                            {rentPerDay}
                                        </span>

                                        <span className=" d-flex align-items-center gap-1 section__description">
                                            <i
                                                class="ri-building-2-line"
                                                style={{ color: "#f9a826" }}
                                            ></i>{" "}
                                            {rentPerDay}
                                        </span>
                                    </div>
                                    <div>
                                        <a href="/booking">
                                            <button style={styles.Button} > Proceed Booking</button>
                                        </a>
                                    </div>
                                </div>
                            </Col>

                            {/* <Col lg="5" className="mt-5">
                                <div className="payment__info mt-5">
                                    <h5 className="mb-4 fw-bold ">Payment Information</h5>
                                    <PaymentMethod />
                                </div>
                            </Col> */}
                        </Row>
                    </Container>
                </section>
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
    //   left: 150,
      width: 150,
      height: 50,
      backgroundColor: '#db0f62',
      color: 'white',
      borderRadius: 5,
      border: 'none',
      marginTop: 25,
    },
  }

export default VehicleDetails
