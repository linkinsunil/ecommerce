import {
  Favorite,
  FavoriteBorder,
  Search,
  ShoppingCart,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import { Badge } from '@mui/material';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartContext';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: '50px' })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: 'center', flex: '2' })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const Navbar = () => {
  const navigate = useNavigate();
  const {
    state: { cart, wishlist },
  } = useCart();

  const handleRegister = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleCart = () => {
    navigate('/cart');
  };

  const handleWishlist = () => {
    navigate('/wishlist');
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{ color: 'grey', fontSize: '16px' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={() => navigate('/')}>CRAFT.</Logo>
        </Center>
        <Right>
          <MenuItem onClick={handleRegister}>REGISTER</MenuItem>
          <MenuItem onClick={handleLogin}>SIGN IN</MenuItem>
          <MenuItem onClick={handleWishlist}>
            <Badge badgeContent={wishlist.length} color='primary'>
              {wishlist.length > 0 ? (
                <Favorite color='secondary' />
              ) : (
                <FavoriteBorder color='action' />
              )}
            </Badge>
          </MenuItem>
          <MenuItem onClick={handleCart}>
            <Badge badgeContent={cart.length} color='primary'>
              {cart.length > 0 ? (
                <ShoppingCart color='secondary' />
              ) : (
                <ShoppingCartOutlined color='action' />
              )}
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
