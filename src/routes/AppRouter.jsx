import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router";
import { useState, lazy, Suspense } from "react";
// import Login from "../pages/Login";
// import Home from "../pages/Home";
// import Friends from "../pages/Friends";
// import Profile from "../pages/Profile";

const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const Friends = lazy(() => import("../pages/Friends"));
const Profile = lazy(() => import("../pages/Profile"));

const guestRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/ads", element: <p>Advertising</p> },
  { path: "*", element: <Navigate to="/" /> },
]);

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <div className="text-4xl py-4 border">Header</div>
        <Outlet />
      </Suspense>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "friends", element: <Friends /> },
      { path: "profile", element: <Profile /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

export default function AppRouter() {
  let user = null
  // const [user, setUser] = useState(false);
  const finalRouter = user ? userRouter : guestRouter;
  return (
    <>
      {/* <button className="btn btn-accent" onClick={() => setUser(!user)}>
        Login
      </button> */}
      <RouterProvider router={finalRouter} />
    </>
  );
}
