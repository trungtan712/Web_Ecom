import React from "react";
import {Col, Container, Row} from "reactstrap";

const Dashboard = () => {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col className="lg-3">
                            <div className="revenue__box">
                                <h5>Total Sales</h5>
                                <span>$63532</span>
                            </div>
                        </Col>
                        <Col className="lg-3">
                            <div className="order__box">
                                <h5>Orders</h5>
                                <span>100</span>
                            </div>
                        </Col>
                        <Col className="lg-3">
                            <div className="product__box">
                                <h5>Total Products</h5>
                                <span>150</span>
                            </div>
                        </Col>
                        <Col className="lg-3">
                            <div className="user__box">
                                <h5>Total Users</h5>
                                <span>30</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Dashboard;
