import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRouter from "./routes/AppRouter";
import useUserStore from "./stores/userStores";
import isTokenExpired from "./utils/isTokenExpired";
import { useEffect } from "react";

function App() {

  const token = useUserStore((state)=> state.token)
  const logout = useUserStore((state) => state.logout)
  useEffect (()=>{
    if(isTokenExpired(token)){
      console.log("Token Expired")
      logout()
    }
  },[])

  return (
    <>
      <AppRouter />
      <ToastContainer position="top-center" style={{ zIndex: 9999 }} />
    </>
  );
}

export default App;
