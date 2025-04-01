import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "./components/Home/Home.jsx";
import AboutRestaurant from "./components/About/About.jsx";
import User from "./User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [{
//       path: "/",
//       element: <HomePage />,
//     },{
//       path: "/about",
//       element: <AboutRestaurant/>,
//     },
//     {
//       path: "/contact",
//       element: <div>Contact Us</div>
//     },{
//       path: "/user/:userId",
//       element: <User/>
//     }],
//   },
// ]);

/* 
  The code above is the same as the one below, but the one below is more readable
*/

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutRestaurant />} />
      <Route path="/contact" element={<div>Contact Us</div>} />
      <Route path="/user/:userId" element={<User />} />
      <Route path="/github" 
      element={<Github />}
      loader={githubInfoLoader}
      
      />
    </Route>
  )
)




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
