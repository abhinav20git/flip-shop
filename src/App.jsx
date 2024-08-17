import Cart from './components/cart/Cart'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Products from './components/product/Products'
import { Provider } from 'react-redux'
import store from './features/store'
import SignIn from './components/SignIn'
import LogIn from './components/LogIn'

function App() {

  return (
    <Provider store={store}>
      <NavBar />
      <Routes>
        <Route path="*" element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/log-in' element={<LogIn />} />
      </Routes>
    </Provider>
  )
}

export default App
