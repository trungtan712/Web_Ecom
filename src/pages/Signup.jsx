import React, { useState } from "react";
import Helmet from "./../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { toast } from "react-toastify";
import axios from "axios";
// import { registerUser } from "../redux/apiRequest";
// import { useDispatch } from "react-redux";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  //   const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // const newUser = {
    //   username: username,
    //   password: password,
    //   lastName: lastName,
    //   firstName: firstName,
    //   address: address,
    //   phoneNumber: phoneNumber,
    //   email: email,
    // };
    // await registerUser(newUser, dispatch, navigate);
    try {
      const response = await axios.post(
        "https://ecommerce-web.herokuapp.com/register",
        JSON.stringify({
          username,
          password,
          firstName,
          lastName,
          address,
          phoneNumber,
          email,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(JSON.stringify(response.data));
      console.log(response);

      if (response.status === 200) {
        toast.success("Account created");
        navigate("/login");
      } else {
        toast.error("Account already exists");
      }
    } catch (error) {
      toast.error("Failed to signup");
    }
    setIsLoading(false);
  };

  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>
            {isLoading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Loading....</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">Signup</h3>
                <Form className="auth__form" onSubmit={handleSignup}>
                  <div className="row">
                    <div className="col-lg-6">
                      <FormGroup className="form__group">
                        <input
                          type="text"
                          placeholder="Enter your firstname"
                          value={firstName}
                          onChange={(e) => setFirstname(e.target.value)}
                        />
                      </FormGroup>
                    </div>

                    <div className="col-lg-6">
                      <FormGroup className="form__group">
                        <input
                          type="text"
                          placeholder="Enter your lastname"
                          value={lastName}
                          onChange={(e) => setLastname(e.target.value)}
                        />
                      </FormGroup>
                    </div>

                    <div className="col-lg-6">
                      <FormGroup className="form__group">
                        <input
                          type="text"
                          placeholder="Enter your username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </FormGroup>
                    </div>

                    <div className="col-lg-6">
                      <FormGroup className="form__group">
                        <input
                          type="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </FormGroup>
                    </div>
                    <div className="col-lg-6">
                      <FormGroup className="form__group">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </FormGroup>
                    </div>

                    <div className="col-lg-6">
                      <FormGroup className="form__group">
                        <input
                          type="tel"
                          placeholder="Enter your phonenumber"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </FormGroup>
                    </div>
                    <div className="col-lg-12">
                      <FormGroup className="form__group">
                        <input
                          type="address"
                          placeholder="Enter your address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </FormGroup>
                    </div>
                    <div className="">
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
                          Create an account
                        </button>
                      )}
                      <p>
                        Already have an account? <Link to="/login">Login</Link>
                      </p>
                    </div>
                  </div>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default SignUp;
