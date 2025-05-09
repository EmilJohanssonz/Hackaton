import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import StartPage from './pages/StartPage';
import HomePage from './pages/HomePage';
import HealthcarePage from './pages/HealthcarePage';
import ShoppingPage from './pages/Shopping';
import EventPage from './pages/Event';
import LokaliztionPage from './pages/LokalizationPage';
import RootLayout from './components/layout/rootlayout';
import RestaurantPage from './pages/RestaurantPage';
import EnterprisePage from './pages/EnterprisePage';
import EducationPage from './pages/EducationPage';
import NewsPage from './pages/NewsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <StartPage /> },
      { path: 'home', element: <HomePage /> },
      { path: 'education', element: <EducationPage /> },
      { path: 'healthcare', element: <HealthcarePage /> },
      { path: 'shopping', element: <ShoppingPage /> },
      { path: 'restaurants/cafe', element: <RestaurantPage /> },
      { path: 'event', element: <EventPage /> },
      { path: 'map', element: <LokaliztionPage /> },
      { path: 'enterprise', element: <EnterprisePage /> },
      { path: 'news', element: <NewsPage /> },
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
