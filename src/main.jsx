import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import "./assets/styles/index.scss";
import { ThemeProvider } from "./providers/ThemeProvider";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            path: "/",
            element: <p>Home</p>,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <ThemeProvider>
      <RouterProvider router={router} />
   </ThemeProvider>
);
