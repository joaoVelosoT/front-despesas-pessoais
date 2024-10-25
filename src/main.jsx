import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

// 1- Configurando router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import ContactDetails from "./routes/ContactDetails.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "contact",
//     element: <Contact />
//   }
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 3 - Pagina de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "contact",
        element : <Contact />
      },
      // 5 - nested routes - identificador unico
      {
        path: "/contact/:id",
        element : <ContactDetails />
      },
      // 7 - navigate para paginas nao existentes
      {
        path : "oldcontact",
        element: <Navigate to={"/contact"} />
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
