import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './layouts/Header/Header'
import { Footer } from './layouts/Footer/Footer'
import Preloader from './components/Preloader/Preloader'

export const App = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
