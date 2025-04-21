import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Componants/Layout/Layout";
import Home from "./Componants/Home/Home";
import Appointments from "./Componants/Appointments/Appointments";
import BookingForm from "./Componants/BookingForm/BookingForm";
import DataContextProvider from "./Componants/DataContext/DataContextProvider";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/appointments", element: <Appointments /> },
        { path: "/bookingform", element: <BookingForm /> },
      ],
    },
  ],
  {
    basename: "/doctor-directory", // مهم جداً لما ترفعي المشروع على GitHub Pages
  }
);

function App() {
  return (
    <DataContextProvider>
      <RouterProvider router={router} />
    </DataContextProvider>
  );
}

export default App;

// my data api
// https://mocki.io/v1/f34beced-303f-4d51-8ad5-3ffa48adb6c0
