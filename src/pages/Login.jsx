import React, { useState } from "react";
import Helmet from "./../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { toast } from "react-toastify";
import { setRole } from "../redux/slices/userSlice";
import axios from "axios";
import { checkIsAdmin } from "../App";
import { useDispatch } from "react-redux";
// import { loginUser } from "../redux/apiRequest";
// import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //   const dispatch = useDispatch();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // const newUser = { username: username, password: password };
    // await loginUser(newUser, dispatch, navigate);

    try {
      const response = await axios.post(
        "https://ecommerce-web.herokuapp.com/login",
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(JSON.stringify(response.data));
      console.log(response);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        toast.success("Successfully logged in");
        let isAdmin = await checkIsAdmin(response.data?.token)
        dispatch(setRole(isAdmin))
        navigate("/checkout");
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
                      style={{ color: "white" }}
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
                    <Link to="/signup">Create an account</Link>
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

export default Login;
