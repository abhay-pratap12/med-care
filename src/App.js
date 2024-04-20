import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
// import Profile from "./Pages/Profile";

import { Provider } from "react-redux";
// import appStore from "./utils/appStore";

import Details from "./pages/Details";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import appStore from "./utils/AppStore";
import Profile from "./pages/Profile";

function App() {
  return (
    <Provider store={appStore}>
    <RouterProvider router={appRouter} />
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Sign />,
  },
  {
    path: "/home",
    element: <Home />,
  },{
    path:"/details",
    element: <Details />
  },
  {
    path:"/profile",
    element: <Profile />
  },
]
);

export default App;
