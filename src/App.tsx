import './App.css'
import { createContext, useState } from "react"
import { Outlet } from 'react-router-dom'
import Header from './layouts/Header/Header'
import { Footer } from './layouts/Footer/Footer'
import Preloader from './components/Preloader/Preloader'

export const LoadContext = createContext(null);

export const App = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	return (
		<>
			<Preloader isLoaded={isLoaded} />
			<Header />
			<LoadContext.Provider value={setIsLoaded}>
                <Outlet />
            </LoadContext.Provider>
			<Footer />
		</>
	)
}
