import { Suspense, useContext, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AboutPageAsync } from './Pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './Pages/MainPage/MainPage.async'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

const App = () => {
	const {theme, toggleTheme} = useTheme()
	const bool = true
	
	return (
		<div className={ classNames('app', {}, [theme]) }>
			<button onClick={ toggleTheme }>TOGGLE</button>
			<Link to="/">main</Link>
			<Link to="/about">about</Link>
			<Suspense fallback={ <div>Loading...</div> }>
				<Routes>
					<Route path="/about" element={ <AboutPageAsync /> } />
					<Route path="/" element={ <MainPageAsync /> } />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App