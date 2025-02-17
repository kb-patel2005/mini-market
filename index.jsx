import { createRoot } from "react-dom/client"

import { createBrowserRouter, RouterProvider } from "react-router"
import App from "./App";
import Cardspage from "./component/Cardspage";
import CardDetail from "./component/CardDetail";
import { stopReportingRuntimeErrors } from "react-error-overlay";

if (process.env.NODE_ENV === "development") {
  stopReportingRuntimeErrors(); // disables error overlays
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Cardspage/>,
        },
        {
          path: "/cardDetail",
          element: <CardDetail/>,
        },
      ]
    },
    
  ]);

const root=createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />)
