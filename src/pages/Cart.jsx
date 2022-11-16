import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useCart } from '../context/cartContext';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;

  ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === 'filled' && 'none'};
  background-color: ${props =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${props => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;

  ${mobile({
    // width: '75%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
  })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const Cart = () => {
  const {
    state: { cart, wishlist },
    dispatch,
  } = useCart();

  const navigate = useNavigate();

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG ({cart.length})</Title>
        <Top>
          <TopButton onClick={() => navigate('/productList')}>
            CONTINUE SHOPPING
          </TopButton>
          <TopTexts>
            <TopText onClick={() => navigate('/wishlist')}>
              Your Wishlist ({wishlist.length})
            </TopText>
          </TopTexts>
        </Top>
        {cart.length > 0 ? (
          <Bottom>
            <CartItem cart={cart} wishlist={wishlist} dispatch={dispatch} />
          </Bottom>
        ) : (
          <SummaryTitle
            style={{
              height: '60vh',
              display: 'grid',
              placeItems: 'center',
              fontWeight: '400',
            }}
          >
            Cart is looking empty 🛒
          </SummaryTitle>
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
