import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import router from "./layout/router";
import { store } from "./redux/store/store";
function App() {
  const state = store.getState();
  // const accessToken = state?.auth?.accessToken;
  // useEffect(() => {
  //   const data = localStorage.getItem("user");
  //   const user = JSON.parse(data);
  //   console.log(user);
  // }, []);

  // useEffect(() => {
  //   if (!accessToken || !accessToken === null) {
  //     router.navigate("/");
  //   } else {
  //     router.navigate("/");
  //   }
  // }, [accessToken]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;