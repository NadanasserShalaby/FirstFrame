import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Portfolio from './Component/Portfolio/Portfolio'
import Contant from './Component/Contant/Contant'
import NotFound from './Component/NotFound/NotFound'

function App() {
  let x = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'contant', element: <Contant /> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ])
  return (
    <RouterProvider router={x}>

    </RouterProvider>
  )
}

export default App
