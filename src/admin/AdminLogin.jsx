import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import Helmet from "../components/Helmet/Helmet";
import {Col, Container, Form, FormGroup, Row} from "reactstrap";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post(
                "https://ecommerce-web.herokuapp.com/login",
                JSON.stringify({username, password}),
                {
                    headers: {"Content-Type": "application/json"},
                }
            );
            console.log(JSON.stringify(response.data));
            console.log(response);

            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                toast.success("Successfully logged in");
                navigate("/dashboard");
            } else {
                toast.error("Invalid username or password");
            }
        } catch (error) {
            toast.error("Failed to login");
        }
        setIsLoading(false);
    };
    return (
        <Helmet title="Login">
            <section>
                <Container>
                    <Row>
                        {isLoading ? (
                            <Col lg="12" className="text-center">
                                <h5 className="fw-bold">Loading.....</h5>
                            </Col>
                        ) : (
                            <Col lg="6" className="m-auto text-center">
                                <h3 className="fw-bold mb-4">Login</h3>

                                <Form className="auth__form" onSubmit={handleLogin}>
                                    <FormGroup className="form__group">
                                        <input
                                            type="text"
                                            placeholder="Enter your username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </FormGroup>

                                    <FormGroup className="form__group">
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            autocomplete="current-password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </FormGroup>

                                    {isLoading ? (
                                        <div
                                            className="spinner-border"
                                            role="status"
                                            style={{color: "white"}}
                                        >
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    ) : (
                                        <button type="submit" className="buy__btn1 auth__btn">
                                            Login
                                        </button>
                                    )}

                                    <p>
                                        Don't have an account?{" "}
                                        <Link to="/dashboard/signup">Create an account</Link>
                                    </p>
                                </Form>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default AdminLogin;
