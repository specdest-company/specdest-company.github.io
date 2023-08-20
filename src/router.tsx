import ErrorPage from './error-page';
import Root from './layout';
import TopPage from './pages/top';
import ContactPage from './pages/contact';
import ContactSentPage from './pages/contact-sent';
import { createHashRouter } from 'react-router-dom';
import AboutUsPage from './pages/about';
import ServicesPage from './pages/services';

export const router = createHashRouter([
  {
    element: <Root />,
    // element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <TopPage />,
      },
      {
        path: '/services',
        element: <ServicesPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/about',
        element: <AboutUsPage />,
      },
      {
        path: '/contact-sent',
        element: <ContactSentPage />,
      },
    ],
  },
]);
