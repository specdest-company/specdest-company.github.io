import "@aws-amplify/ui-react/styles.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider, createBrowserRouter
} from 'react-router-dom'
import ErrorPage from "./error-page";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports.js';
import Root from "./router";
import { TopPage } from "./ui-components";

Amplify.configure(awsconfig);


const router = createBrowserRouter([
  {
    element: <Root />,
    // element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <TopPage width="100%" overrides={{
          Services: {
            id: "services"
          },
        }} />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
