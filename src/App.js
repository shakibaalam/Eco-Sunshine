import { BrowserRouter as Router, RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./layout/router";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { useEffect } from "react";

function App() {
  const state = store.getState();
  const accessToken = state?.auth?.accessToken;
  useEffect(() => {
    const data = localStorage.getItem("user");
    const user = JSON.parse(data);
    console.log(user);
  }, []);

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
    </>
  );
}

export default App;
