import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, About, Article, SharedLayout } from './pages'

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
