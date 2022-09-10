import styled from 'styled-components';
import { useCart } from '../context/cartContext';
import { mobile } from '../responsive';

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${props =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${props => props.type === 'filled' && 'white'};
`;

const Product = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 0.5px solid #e4e4e4;
  margin-bottom: 10px;

  ${mobile({ flexDirection: 'column' })}
`;

const ProductDetail = styled.div`
  display: flex;
  flex: 4;
`;

const Image = styled.img`
  width: 150px;
`;

const Details = styled.div`
  flex: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.div`span`;

const ProductId = styled.div`span`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const ProductSize = styled.div``;

const Buttons = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Button = styled(TopButton)`
  display: flex;
  width: 100%;
  align-self: center;
  justify-self: center;
`;

const RemoveButton = styled.button`
  padding: 10px;
  font-weight: 600;
  background-color: transparent;
  color: black;
  margin-top: 20px;
  cursor: pointer;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #e2e2e2;
    transition: all 0.5s ease;
  }
`;

const WishListItem = ({ dispatch, item }) => {
  const {
    state: { cart, wishlist },
  } = useCart();
  console.log('🟢', cart);
  console.log('🟠', wishlist);

  return (
    <Product>
      <ProductDetail>
        <Image src={item.image} />
        <Details>
          <ProductName>
            <b>Product:</b> {item.name}
          </ProductName>
          <ProductId>
            <b>ID:</b> {item.id}
          </ProductId>
          <ProductColor color={item.color} />
          <ProductSize>
            <b>Size:</b> 37.5
          </ProductSize>
        </Details>
      </ProductDetail>
      <Buttons>
        <Button
          type='filled'
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: item })}
        >
          ADD TO CART
        </Button>
        <RemoveButton
          onClick={() =>
            dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: item })
          }
        >
          REMOVE
        </RemoveButton>
      </Buttons>
    </Product>
  );
};

export default WishListItem;
