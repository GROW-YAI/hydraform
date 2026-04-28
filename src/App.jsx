import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LandingPage from './pages/landing-page';
import RootLayout from './layouts/rootLayout';
import About from './pages/landing-page/components/about';
import { ToastContainer } from "react-toastify";
import Blog from './pages/landing-page/components/blog';
import Contact from './pages/landing-page/components/contact';
import Hero from './pages/landing-page/components/hero';
import Services from './pages/landing-page/components/services';
import Testimonials from './pages/landing-page/components/testimonials';
import BoafoWidgetInitializer from './components/BoafoWidgetInitializer';



function App() {
  return (
    <>
      <BoafoWidgetInitializer />
      <ToastContainer />
      <RouterProvider router={createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/blog',
          element: <Blog />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/hero',
          element: <Hero />,
        },
        {
          path: '/services',
          element: <Services />,
        },
        {
          path: '/testimonials',
          element: <Testimonials />,
        },
      ],
    },
  ])} />
    </>
  );
}

export default App;
