// import { RouterProvider,createBrowserRouter } from 'react-router-dom'
// import './App.css'
// import Homepage from './pages/Homepage'
// import MainLayout from './layouts/MainLayout'
// import Citiespage from './pages/Citiespage'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import router from './router/router'

function App() {

  return (
    
    <RouterProvider router={router}/>
    
  )
}

export default App
