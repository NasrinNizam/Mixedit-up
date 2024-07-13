
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { LayoutOne } from './Layouts/LayoutOne'
import { HomePage } from './Pages/HomePage'
import { About } from './Pages/About'
import { Product } from './Pages/Product'
import { Contact } from './Pages/Contact'
import { Help } from './Pages/Help'

function App() {
 const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
           <Route index element={<HomePage/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/product' element={<Product/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/help' element={<Help/>}/>
      </Route>
    </Route>
  )
 )
  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
