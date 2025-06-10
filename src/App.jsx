import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import Template from './Template';

import './App.css'
import './assets/fonts/fonts.css'


function App(){
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Template />} >
          <Route index element={<HomePage />} />
          <Route path='/products/:categoryId' element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
  )
}



export default App
