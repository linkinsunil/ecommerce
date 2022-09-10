import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import WishListItem from '../components/WishListItem';
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
  flex-direction: column;
  align-items: center;

  ${mobile({
    // width: '75%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
  })}
`;

const Wishlist = () => {
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
        <Title>YOUR WISHLIST ({wishlist.length})</Title>
        <Top>
          <TopButton onClick={() => navigate('/productList')}>
            CONTINUE SHOPPING
          </TopButton>
          <TopTexts>
            <TopText onClick={() => navigate('/cart')}>
              Shopping Bag ({cart.length})
            </TopText>
          </TopTexts>
        </Top>
        {wishlist.length > 0 ? (
          <Bottom>
            {wishlist.map(item => (
              <WishListItem dispatch={dispatch} item={item} key={item.id} />
            ))}
          </Bottom>
        ) : (
          <Bottom
            style={{
              height: '60vh',
              display: 'grid',
              placeItems: 'center',
              fontSize: '30px',
            }}
          >
            Wishlist is looking empty 💔
          </Bottom>
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Wishlist;
