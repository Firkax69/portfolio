import "./App.css";
import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom";

import Header from "./components/Header";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";

const Layout = () => {
  return (
    <>
      <Header/>
      <div id="app-main-content-container">
        <Outlet/>
      </div>
    </>
  );
};

function App() {
  //Router

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {index: true, element: <Home/>},
        {path: "projects", element: <Projects />},
      ],
    }
  ])

  return <RouterProvider router={router} />;
}

export default App;