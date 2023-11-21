import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Product from './components/pages/Product'
import Cart from './components/pages/Cart'
import ProductDetails from './components/pages/ProductDetails'
import Checkout from './components/pages/Checkout'
import store from './store/store/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />} >
      <Route path="" element={<Product />}></Route>
      <Route path="cart" element={<Cart />}></Route>
      <Route path="productDetails/:productId" element={<ProductDetails />}></Route>
      <Route path="checkout" element={<Checkout />}></Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  // </React.StrictMode>,
)
