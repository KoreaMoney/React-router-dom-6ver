import { createBrowserRouter, Routes, Route } from "react-router-dom";
import ErrorComponet from "./components/ErrorComponet";
import Root from "./Root";
import About from "./Screens/About";
import Home from "./Screens/Home";
import NotFound from "./Screens/NotFound";
import Followers from "./Screens/users/Followers";
import User from "./Screens/users/User";

/**첫번째 Route는 Home이 아니다
 * 전체 Route들의 컨테이너와 같은 것이다
 */
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponet />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "Followers",
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);
export default Router;
