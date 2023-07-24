import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../pages/Home";
import NotFound from "../shared/NotFound";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Event from "../pages/Event";
import Campaign from "../pages/Campaign";
import Product from "../pages/Product";
import ViewDetails from "../components/About/ViewDetails";
import BlogDetails from "../components/Blog/BlogDetails";
import EventDetails from "../components/Event/EventDetails";
import CampaignDetails from "../components/Campaign/CampaignDetails";
import ProductDetails from "../components/Shop/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "home", element: <Home></Home> },
      { path: "about", element: <About /> },
      { path: "details/:id", element: <ViewDetails /> },
      { path: "blog", element: <Blog /> },
      { path: "blogDetails/:id", element: <BlogDetails /> },
      { path: "events", element: <Event /> },
      { path: "eventDetails/:id", element: <EventDetails /> },
      { path: "campaign", element: <Campaign /> },
      { path: "campaignDetails/:id", element: <CampaignDetails /> },
      { path: "product", element: <Product /> },
      { path: "productDetails/:id", element: <ProductDetails /> },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
