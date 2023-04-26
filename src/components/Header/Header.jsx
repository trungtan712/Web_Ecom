import React, { useRef, useEffect, useState ,useLayoutEffect} from "react";

import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";

import logo from "../../assets/images/eco-logo.png";

import { Container, Row } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];
const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const profileActionRef = useRef(null);

  const dispatch = useDispatch();

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [showTip,setShowTip] = useState(false);

  const userSlide = useSelector((state)=>state.user)
  const navigate = useNavigate();
  // console.log(currentUser);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    /// get User information
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ecommerce-web.herokuapp.com/me",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        dispatch(setUser(response.data))
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, [localStorage.getItem("token")]);

  console.log(userSlide)
  const menuToggel = () => menuRef.current.classList.toggle("active__menu");

  const navigateToCart = () => {
    navigate("/cart");
  };

  const logout = () => {
    localStorage.clear(); // Clear localStorage when user logs out
    dispatch(setUser(null))
    window.location.reload(); // Reload the page to show login page
  };
  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__profileActions");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>PhoneStore</h1>
              </div>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggel}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(naVClass) =>
                        naVClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>

              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile">
                <span  onClick={()=>setShowTip(!showTip)}>
                  <i class="ri-settings-5-line"></i>
                </span>
                    {showTip && 
                    <div
                    className="profile__actions"
                    ref={profileActionRef}
                   
                  >
{
                      console.log(userSlide.currentUser)
}                    
                    {
                      userSlide.currentUser?.username ? (
                        <span onClick={logout}>Logout</span> // Đăng xuất khi người dùng nhấp vào
                      ) : (
                        <div>
                          {/* <Link to="/signup">Signup</Link> */}
                          <Link to="/login">Login</Link>
                        </div>
                      )
                    }
                    
                  </div>
                    }
              </div>
              { userSlide.currentUser?.username && <p>Hi! { userSlide.currentUser&& userSlide.currentUser.username}</p> }

              <div className="mobile__menu">
                <span onClick={menuToggel}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
