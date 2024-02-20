import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Root, { loader as rootLoader, action as rootAction } from './routes/root'
import ErrorPage from './error-page'
import Contact, {loader as contactLoader} from './routes/contact'
import { action as destroyAction } from "./routes/destroy"
import { action as contactAction } from './routes/contact'
import {action as updateAction } from './routes/edit'
import EditContact from './routes/edit'
import Index from './routes'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: <Index/>,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: updateAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement:  <div>Oops! There was an error.</div>,
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
