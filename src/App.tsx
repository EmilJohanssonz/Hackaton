import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import StartPage from "./pages/StartPage";
import HomePage from "./pages/HomePage";
import UtbildningPage from "./pages/Utbildning";
import VårdHälsaPage from "./pages/Vård&Hälsa";
import ShoppingPage from "./pages/Shopping";
import ResturangPage from "./pages/Restaurang";
import EventPage from "./pages/Event";
import LokaliztionPage from "./pages/LokalizationPage";
import FöretagPage from "./pages/Företag";
import RootLayout from "./components/layout/rootlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <StartPage /> },
      { path: "home", element: <HomePage /> },
      { path: "utbildning", element: <UtbildningPage /> },
      { path: "vård/hälsa", element: <VårdHälsaPage /> },
      { path: "shopping", element: <ShoppingPage /> },
      { path: "resturanger/cafe", element: <ResturangPage /> },
      { path: "event", element: <EventPage /> },
      { path: "karta", element: <LokaliztionPage /> },
      { path: "företag", element: <FöretagPage /> },
    ],
  },
]);

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
