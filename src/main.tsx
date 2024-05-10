import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home.tsx'
import { ProjectInfo } from './pages/ProjectInfo.tsx'
<<<<<<< HEAD
import InoLaunchpad from './pages/InoLaunchpad.tsx'
=======
import { Swap } from './pages/Swap.tsx'
>>>>>>> origin/main

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'project-info',
        element: <ProjectInfo />
      },
      {
<<<<<<< HEAD
        path: 'ino-launchpad',
        element: <InoLaunchpad />
=======
        path: 'swap',
        element: <Swap />
>>>>>>> origin/main
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
