import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../context/cartContext';
import Rating from './Rating';

const Container = styled.div`
  flex: 4;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(109, 93, 255, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Info2 = styled(Info)`
  flex-direction: column;
  justify-content: flex-end;
  font-size: 16px;
`;

const Title = styled.h3`
  color: white;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
const Price = styled.p`
  color: white;
`;

const Button = styled.button`
  font-size: 14px;
  width: 50%;
  padding: 10px 0;
  font-weight: 900;
  background-color: ${({ type }) => (type === 'primary' ? 'teal' : '#e2e2e2')};
  color: ${({ type }) => (type === 'primary' ? 'white' : 'teal')};
  border: ${({ type }) => (type === 'primary' ? 'none' : '2px solid teal')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const ProductCard = ({ page }) => {
  const navigate = useNavigate();
  const {
    state: { products, cart, wishlist },
    dispatch,
  } = useCart();

  console.log(products);

  return (
    <Container>
      {products.map(item => (
        <Wrapper key={item.id}>
          <Circle />
          <Image src={item.image} />
          {page === 'home' ? (
            <Info>
              <Icon>
                <ShoppingCartOutlined />
              </Icon>
              <Icon>
                <SearchOutlined />
              </Icon>
              <Icon>
                <FavoriteBorderOutlined />
              </Icon>
            </Info>
          ) : (
            <Info2>
              <Title onClick={() => navigate(`/product/${item.id}`)}>
                {item.name}
              </Title>
              {/* <Title onClick={() => handleProductPage(item)}>
                  {item.name}
                </Title> */}
              {/* <Link to={`/product/${item.id}`}>LINK {item.name}</Link> */}
              <Price>₹ {item.price}</Price>
              {cart.some(el => el.id === item.id) ? (
                <Button
                  type='primary'
                  style={{ backgroundColor: 'red' }}
                  onClick={() =>
                    dispatch({ type: 'REMOVE_FROM_CART', payload: item })
                  }
                >
                  REMOVE FROM CART
                </Button>
              ) : (
                <Button
                  type='primary'
                  disabled={!item.inStock}
                  onClick={() =>
                    dispatch({ type: 'ADD_TO_CART', payload: item })
                  }
                  style={{ backgroundColor: !item.inStock && 'lightgray' }}
                >
                  {!item.inStock ? 'OUT OF STOCK' : 'ADD TO CART'}
                </Button>
              )}

              {wishlist.some(el => el.id === item.id) ? (
                <Button
                  type='secondary'
                  onClick={() =>
                    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: item })
                  }
                >
                  REMOVE FROM WISHLIST
                </Button>
              ) : (
                <Button
                  type='secondary'
                  onClick={() =>
                    dispatch({ type: 'ADD_TO_WISHLIST', payload: item })
                  }
                >
                  ADD TO WISHLIST
                </Button>
              )}

              <Rating rating={item.ratings} />
            </Info2>
          )}
        </Wrapper>
      ))}
    </Container>
  );
};

export default ProductCard;
