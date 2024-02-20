import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { action as destroyAction } from "./routes/destroy"
import Contact, { loader as contactLoader, action as contactAction } from './routes/contact'
import Root, { loader as rootLoader, action as rootAction } from './routes/root'
import EditContact, { action as updateAction } from './routes/edit'
import Index from './routes'
import ErrorPage from './error-page'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>} errorElement={<ErrorPage />} loader={rootLoader} action={rootAction}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index/>} />
        <Route path="contacts/:contactId" element={<Contact />} loader={contactLoader} action={contactAction} />
        <Route path="contacts/:contactId/edit" element={<EditContact />} loader={contactLoader} action={updateAction} />
        <Route path="contacts/:contactId/destroy" action={destroyAction} errorElement={<div>Oops! There was an error.</div>} />
      </Route>
    </Route>
  )
)

// [
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: rootLoader,
//     action: rootAction,
//     children: [
//       {
//         errorElement: <ErrorPage />,
//         children: [
//           {
//             index: true,
//             element: <Index />,
//           },
//           {
//             path: "contacts/:contactId",
//             element: <Contact />,
//             loader: contactLoader,
//             action: contactAction,
//           },
//           {
//             path: "contacts/:contactId/edit",
//             element: <EditContact />,
//             loader: contactLoader,
//             action: updateAction,
//           },
//           {
//             path: "contacts/:contactId/destroy",
//             action: destroyAction,
//             errorElement: <div>Oops! There was an error.</div>,
//           }
//         ]
//       }
//     ]
//   },
// ]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
