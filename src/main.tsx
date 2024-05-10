import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home.tsx'
import { ProjectInfo } from './pages/ProjectInfo.tsx'
import InoLaunchpad from './pages/InoLaunchpad.tsx'
import { Swap } from './pages/Swap.tsx'

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
        path: 'swap',
        element: <Swap />
      },
      {        path: 'ino-launchpad',
      element: <InoLaunchpad />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
