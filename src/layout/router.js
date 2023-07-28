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
import LogInForm from "../pages/LogInForm";
import RegistrationForm from "../pages/RegistrationForm";
import RequireAuth from "../require/RequireAuth";
import Dashboard from "../pages/Dashboard";
import UserOrder from "../components/Dashboard/UserOrder";
import MyDoantion from "../components/Dashboard/MyDoantion";
import AddProduct from "../components/Dashboard/Admin/AddProduct";
import AddBlog from "../components/Dashboard/Admin/AddBlog";
import AddEvent from "../components/Dashboard/Admin/AddEvent";
import AddCampaign from "../components/Dashboard/Admin/AddCampaign";
import ManageBlog from "../components/Dashboard/Admin/ManageBlog";
import ManageProduct from "../components/Dashboard/Admin/ManageProduct";
import ManageUser from "../components/Dashboard/Admin/ManageUser";
import ManageEvent from "../components/Dashboard/Admin/ManageEvent";
import ManageOrder from "../components/Dashboard/Admin/ManageOrder";
import ManageCampaign from "../components/Dashboard/Admin/ManageCampaign";
import RequireAdmin from "../require/RequireAdmin";

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
      { path: "login", element: <LogInForm /> },
      { path: "signup", element: <RegistrationForm /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
    children: [
      { path: "my-order", element: <UserOrder /> },
      { path: "my-donation", element: <MyDoantion /> },
      {
        path: "add-product",
        element: (
          <RequireAdmin>
            <AddProduct />
          </RequireAdmin>
        ),
      },
      {
        path: "add-blog",
        element: (
          <RequireAdmin>
            <AddBlog />
          </RequireAdmin>
        ),
      },
      {
        path: "add-event",
        element: (
          <RequireAdmin>
            <AddEvent />
          </RequireAdmin>
        ),
      },
      {
        path: "add-campaign",
        element: (
          <RequireAdmin>
            <AddCampaign />{" "}
          </RequireAdmin>
        ),
      },
      {
        path: "manage-blog",
        element: (
          <RequireAdmin>
            <ManageBlog />
          </RequireAdmin>
        ),
      },
      {
        path: "manage-product",
        element: (
          <RequireAdmin>
            <ManageProduct />
          </RequireAdmin>
        ),
      },
      {
        path: "manage-event",
        element: (
          <RequireAdmin>
            <ManageEvent />
          </RequireAdmin>
        ),
      },
      {
        path: "manage-campaign",
        element: (
          <RequireAdmin>
            <ManageCampaign />
          </RequireAdmin>
        ),
      },
      {
        path: "manage-user",
        element: (
          <RequireAdmin>
            <ManageUser />
          </RequireAdmin>
        ),
      },
      {
        path: "manage-order",
        element: (
          <RequireAdmin>
            <ManageOrder />
          </RequireAdmin>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
