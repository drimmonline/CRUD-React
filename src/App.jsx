import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Homepage } from "./pages/Homepage";
import { Ownerpage } from "./pages/Ownerpage";
import { Layout } from "./pages/Layout";
import { UserHomeSection } from "./components/UserHomeSection";
import { AdminSection } from "./components/AdminSection";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: (
        <div>
          <p>Page Not Found</p>
        </div>
      ),
      children: [
        {
          path: "/",
          element: <Homepage />,
          children: [
            {
              index: true,
              element: <UserHomeSection />,
            },
            {
              path: "userhomsection",
              element: <UserHomeSection />,
            },
            {
              path: "adminsection",
              element: <AdminSection />,
            },
          ],
        },
        { path: "owner", element: <Ownerpage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
