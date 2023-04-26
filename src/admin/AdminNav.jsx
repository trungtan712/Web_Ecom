import React, { useEffect, useLayoutEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import "../styles/admin-nav.css";
import { NavLink, useNavigate } from "react-router-dom";
import products from "../assets/data/products";
import { toast } from "react-toastify";
import { checkIsAdmin } from "../App";
const admin_nav = [
  {
    display: "Dashboard",
    path: "/dashboard",
  },
  {
    display: "All-Products",
    path: "/dashboard/all-products",
  },
  {
    display: "Orders",
    path: "/dashboard/orders",
  },
  {
    display: "Users",
    path: "/dashboard/users",
  },
  {
    display: "Delivery",
    path: "/dashboard/delivery",
  },
];

const AdminNav = () => {
  // check is admin

  const nav = useNavigate();
  useLayoutEffect(() => {
    const sync = async () => {
      let token = localStorage.getItem("token");
      if (token && token.trim() !== "") {
        let isAdmin = await checkIsAdmin(localStorage.getItem("token"));
        if (!isAdmin) {
          toast.error("You do not have permission");
          nav("/");
        }
      }
    };
    sync();
  }, [localStorage.getItem("token")]);

  const [productsData, setProductsData] = useState(products);
  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchProducts = products.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    );

    setProductsData(searchProducts);
  };

  return (
    <>
      <header className="admin__header">
        <div className="admin__nav-top">
          <Container>
            <div className="admin__nav-wrapper-top">
              <div className="logo">
                <h2>PhoneStore</h2>
              </div>
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search....."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
              <div className="admin__nav-top-right">
                <span>
                  <i class="ri-notification-3-line"></i>
                </span>
                <span>
                  <i class="ri-settings-2-line"></i>
                </span>
              </div>
            </div>
          </Container>
        </div>
      </header>
      <section className="admin__menu p-0">
        <Container>
          <Row>
            <div className="admin__navigation">
              <ul className="admin__menu-list">
                {admin_nav.map((item, index) => (
                  <li className="admin__menu-item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? " active__admin-menu" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminNav;
