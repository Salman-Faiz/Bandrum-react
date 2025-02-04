import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider} from "react-router-dom";
import './index.css'
import router from './Routes/Routes.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProviders>
  <RouterProvider router={router}></RouterProvider>
  </AuthProviders>
 </React.StrictMode>,
)
