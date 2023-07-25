import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./layout/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/store/store";
import { useEffect } from "react";

function App() {
  const state = store.getState();
  const accessToken = state?.auth?.accessToken;

  useEffect(() => {
    if (!accessToken || !accessToken === null) {
      router.navigate("/");
    } else {
      router.navigate("/");
    }
  }, [accessToken]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
