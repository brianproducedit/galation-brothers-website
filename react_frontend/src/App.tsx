import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DarkModeProvider from './contexts/DarkModeContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import FeedbackPage from './pages/FeedbackPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

/**
 * Main App component with routing configuration.
 * Sets up React Router with all page routes and wraps with DarkModeProvider.
 */
const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'services',
          element: <ServicesPage />,
        },
        {
          path: 'feedback',
          element: <FeedbackPage />,
        },
        {
          path: 'contact',
          element: <ContactPage />,
        },
        {
          path: 'about',
          element: <AboutPage />,
        },
      ],
    },
  ]);

  return (
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
};

export default App;
