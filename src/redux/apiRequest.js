// import axios from "axios";
// import {
//     loginFailed,
//     loginStart,
//     loginSuccess,
//     registerFailed,
//     registerStart,
//     registerSuccess,
// } from "./slices/authSlice";
// import {
//     getUserStart,
//     getUserSuccess,
//     getUsersFailed,
// } from "./slices/userSlice";
// import {toast} from "react-toastify";
//
//
// export const loginUser = async (user, dispatch, navigate) => {
//     dispatch(loginStart());
//     try {
//         const res = await axios.post(
//             "https://ecommerce-web.herokuapp.com/login",
//             user
//         );
//         dispatch(loginSuccess(res.data));
//         toast.success("Successfully logged in");
//         navigate("/checkout");
//     } catch (err) {
//         dispatch(loginFailed());
//         toast.error("Invalid username or password");
//     }
// };
//
// export const registerUser = async (user, dispatch, navigate) => {
//     dispatch(registerStart());
//     try {
//         const res = await axios.post("https://ecommerce-web.herokuapp.com/register", user);
//
//         dispatch(registerSuccess(res.data));
//         toast.success("Account created");
//         navigate("/login");
//     } catch (err) {
//         dispatch(registerFailed());
//         toast.error("Failed to signup");
//     }
// };
//
//
// export const getUsers = () => async (dispatch) => {
//     try {
//         const res = await axios.get("https://ecommerce-web.herokuapp.com/users");
//         dispatch({
//             type: "GET_USERS_SUCCESS",
//             payload: res.data,
//         });
//     } catch (error) {
//         dispatch({
//             type: "GET_USERS_ERROR",
//             payload: error.message,
//         });
//     }
// };
//
