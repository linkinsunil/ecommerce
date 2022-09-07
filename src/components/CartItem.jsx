import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  ${mobile({ flexDirection: 'column' })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 150px;
`;

const Details = styled.div`
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

const ProductSize = styled.div`span`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mobile({ marginBottom: '10px' })}
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
`;

const Select = styled.select`
  padding: 8px 30px;
  font-weight: 600;
  font-size: 14px;
`;

const Option = styled.option``;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: max-content;

  ${mobile({ width: '100%' })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === 'total' && '500'};
  font-size: ${props => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const RemoveButton = styled(Button)`
  border: none;
  background-color: transparent;
  color: black;
  margin-top: 20px;
  width: 70%;

  &:hover {
    background-color: #e2e2e2;
    transition: all 0.5s ease;
  }
`;

const CartItem = ({ cart, dispatch }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const subTotal = cart.map(item => Number(item.price) * Number(item.qty));
    console.log(subTotal);
    setTotal(subTotal.reduce((acc, curr) => acc + curr, 0));
  }, [cart]);

  return (
    <Container>
      <Info>
        {cart.map(item => (
          <Product key={item.id}>
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
            <PriceDetail>
              <ProductAmountContainer>
                <Select
                  value={item.qty}
                  onChange={e =>
                    dispatch({
                      type: 'CHANGE_CART_QTY',
                      payload: {
                        id: item.id,
                        qty: e.target.value,
                      },
                    })
                  }
                >
                  {[...Array(item.inStock).keys()].map(el => (
                    <Option key={el}>{el + 1}</Option>
                  ))}
                </Select>
              </ProductAmountContainer>
              <ProductPrice>₹ {item.price}</ProductPrice>
              <RemoveButton
                onClick={() =>
                  dispatch({ type: 'REMOVE_FROM_CART', payload: item })
                }
              >
                REMOVE FROM CART
              </RemoveButton>
            </PriceDetail>
          </Product>
        ))}
      </Info>
      <Summary>
        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
        <SummaryItem>
          <SummaryItemText>Subtotal</SummaryItemText>
          <SummaryItemPrice>₹ {total}</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText>Estimated Shipping</SummaryItemText>
          <SummaryItemPrice>₹ {(total * 5) / 100}</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText>Shipping Discount</SummaryItemText>
          <SummaryItemPrice>₹ {(total * 5) / 100}</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem type='total'>
          <SummaryItemText>Total</SummaryItemText>
          <SummaryItemPrice>₹ {total}</SummaryItemPrice>
        </SummaryItem>
        <Button>CHECKOUT NOW</Button>
      </Summary>
    </Container>
  );
};

export default CartItem;
