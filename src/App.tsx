import './App.css'
import router from './router'
import { RouterProvider } from 'react-router-dom'
import { apiTokens } from './api/apiSlice'
import Loader from './components/UI/loader/Loader'
import gsap from 'gsap'
import { Flip } from 'gsap/all'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, Flip)

function App() {
	const { isLoading } = apiTokens.useFetchAllTokensQuery()
	if (isLoading) return <Loader />

	return <RouterProvider router={router} />
}

export default App
