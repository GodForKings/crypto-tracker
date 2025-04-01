import React from 'react'
import './App.css'
import router from './components/AppRouter'
import { RouterProvider } from 'react-router-dom'
import { apiTokens } from './api/apiSlice'
import Loader from './components/UI/loader/Loader'
import gsap from 'gsap'
import { Flip } from 'gsap/all'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, Flip)

function App() {
	const { error, isLoading } = apiTokens.useFetchAllTokensQuery()
	if (isLoading) return <Loader />
	if (error) return <h2>wow...it's error, reload</h2>

	return <RouterProvider router={router} />
}

export default App
