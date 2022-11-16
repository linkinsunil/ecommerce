import {
  Favorite,
  FavoriteBorder,
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
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
  background-color: rgb(109, 93, 255, 0.4);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  flex: 1;
  margin: 5px;
  width: 280px;
  height: 300px;
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
  min-width: 100%;
  height: 100%;
  object-fit: cover;
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
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
const Price = styled.div`
  color: white;
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  font-size: 14px;
  width: 50%;
  padding: 10px 0;
  background-color: ${({ type }) => (type === 'primary' ? 'teal' : '#bcbcbc')};
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
    transform: scale(1.08);
  }
`;

const WishIcon = styled.div`
  z-index: 10;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.08);
  }
`;

const ProductCard = ({ page }) => {
  const navigate = useNavigate();
  const {
    state: {
      products,
      cart,
      wishlist,
      filterByCategory,
      filterByPrice,
      sortByPrice,
      filterByRating,
    },
    dispatch,
  } = useCart();

  const getSortedData = (arr, sortBy) => {
    if (sortBy && sortBy === 'lth') {
      return arr.sort((a, b) => a.price - b.price);
    }
    if (sortBy && sortBy === 'htl') {
      return arr.sort((a, b) => b.price - a.price);
    }
    return arr;
  };

  const categorisedProducts = (arr, category, price, rating) => {
    console.log('category', category);
    console.log('filterByRating', filterByRating);
    return category.length > 0
      ? category
          .map(itemCategory => arr.filter(prod => prod.cat === itemCategory))
          .flat()
          .filter(item => (price ? Number(item.price) <= price : item))
          .filter(item => (rating ? Number(item.ratings) <= rating : item))
      : arr
          .filter(item => (price ? Number(item.price) <= price : item))
          .filter(item => (rating ? Number(item.ratings) <= rating : item));
  };

  const sortedData = getSortedData(products, sortByPrice);

  const filteredData = categorisedProducts(
    sortedData,
    filterByCategory,
    filterByPrice,
    filterByRating
  );

  console.log('filteredData', filteredData);
  console.log('filterByPrice', filterByPrice);
  console.log('sortByPrice', sortByPrice);

  return (
    <Container>
      {filteredData.map(item => (
        <Wrapper key={item.id}>
          <Circle />
          <Image src={item.image} />
          {page === 'home' ? (
            <Info>
              {cart.some(el => el.id === item.id) ? (
                <Icon
                  type='primary'
                  style={{ color: 'red' }}
                  onClick={() =>
                    dispatch({ type: 'REMOVE_FROM_CART', payload: item })
                  }
                >
                  <ShoppingCart />
                </Icon>
              ) : (
                <Icon
                  type='primary'
                  disabled={!item.inStock}
                  onClick={() =>
                    dispatch({ type: 'ADD_TO_CART', payload: item })
                  }
                >
                  <ShoppingCartOutlined />
                </Icon>
              )}
              <Icon onClick={() => navigate(`/product/${item.id}`)}>
                <SearchOutlined />
              </Icon>
              {wishlist.some(el => el.id === item.id) ? (
                <Icon
                  type='secondary'
                  style={{ color: 'red' }}
                  onClick={() =>
                    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: item })
                  }
                >
                  <Favorite />
                </Icon>
              ) : (
                <Icon
                  type='secondary'
                  onClick={() =>
                    dispatch({ type: 'ADD_TO_WISHLIST', payload: item })
                  }
                >
                  <FavoriteBorderOutlined />
                </Icon>
              )}
            </Info>
          ) : (
            <Info2>
              <Title onClick={() => navigate(`/product/${item.id}`)}>
                {item.name}
              </Title>
              <Price>
                ₹ {item.price} <Rating rating={item.ratings} />
              </Price>
              {cart.some(el => el.id === item.id) ? (
                <Button type='primary' onClick={() => navigate('/cart')}>
                  GO TO CART
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
                <WishIcon
                  type='secondary'
                  style={{ color: 'red' }}
                  onClick={() =>
                    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: item })
                  }
                >
                  <Favorite fontSize='large' />
                </WishIcon>
              ) : (
                <WishIcon
                  type='secondary'
                  style={{ color: '#bcbcbc' }}
                  onClick={() =>
                    dispatch({ type: 'ADD_TO_WISHLIST', payload: item })
                  }
                >
                  <FavoriteBorder fontSize='large' />
                </WishIcon>
              )}
            </Info2>
          )}
        </Wrapper>
      ))}
    </Container>
  );
};

export default ProductCard;
