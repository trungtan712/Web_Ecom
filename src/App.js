import axios from "axios";
import "./App.css";
import Layout from "./components/Layout/Layout";
export const checkIsAdmin = async(token)=>{
  try{
    let resp = await axios.get("https://ecommerce-web.herokuapp.com/products",{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
  })
  if(resp.status == 403){
    return false;
  }
  if(resp.status == 200){
    return true;
  }
  }catch(e){
    return false;
  }
  
}

function App() {
  return <Layout />;
}
export default App;