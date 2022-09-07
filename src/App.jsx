import styled from 'styled-components';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import Wishlist from './pages/Wishlist';

const Container = styled.div`
  overflow: hidden;
`;

const BlankRoute = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/productList' element={<ProductList />} />

          <Route path='product/:productId' element={<Product />} />

          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/wishlist' element={<Wishlist />} />

          <Route
            path='*'
            element={
              <BlankRoute>
                <p>There's nothing here!</p>
              </BlankRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
