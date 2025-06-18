import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import Template from './Template';

import './App.css'
import './assets/fonts/fonts.css'
import ProductDetails from './Pages/ProductDetails';
import PageNotFound from './Pages/PageNotFound';
import Login from './Pages/Login';
import Dashboard from './Pages/Dasboard';
import ProtectedRoute from './utils/protectedRoute';
import PublicRoute from './utils/publicRoute';
import { AuthProvider } from './Context/AuthContext';


function App(){
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Template />} >
            <Route index element={<HomePage />} />
            <Route path='/products/:categoryId' element={<ProductPage />} />
            <Route path='/product-details/*' element={<ProductDetails />} />
            <Route path='/login' element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}



export default App
