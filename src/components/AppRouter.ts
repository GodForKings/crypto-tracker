import { createBrowserRouter } from 'react-router-dom'
import { publicRoutes } from '../router/routes'

// Отследить состояние и вернуть роутер можно здесь (типа авторизации и прочего) \\
const router = createBrowserRouter(publicRoutes)

export default router
