import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";

const SignUpAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://ecommerce-web.herokuapp.com/register",
        JSON.stringify({
          username,
          password,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(JSON.stringify(response.data));
      console.log(response);

      if (response.status === 200) {
        toast.success("Account created");
        navigate("/dashboard/login");
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
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
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
                      Already have an account?{" "}
                      <Link to="/dashboard/login">Login</Link>
                    </p>
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

export default SignUpAdmin;
