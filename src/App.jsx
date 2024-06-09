import './App.css'
import Rootlayout from './components/Rootlayout'
import Home from "./pages/Home"
import Product from "./pages/Product"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Productdetaills from './pages/Productdetaills'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout/>}>
    <Route index element={ <Home/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/product/:id' element={<Productdetaills/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/checkout' element={<Checkout/>}></Route>
  </Route>
))

function App() {


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
