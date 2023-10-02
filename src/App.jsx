import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SharedLayout from './pages/SharedLayout'
import Home from './pages/Home'
import About from './pages/About'
import Article from './pages/Article'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'article',
        element: <Article />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
