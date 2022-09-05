import styled from 'styled-components';
import { useCart } from '../context/cartContext';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`;

const Products = () => {
  const {
    state: { cart, products },
  } = useCart();
  console.log(products);
  return (
    <Container>
      {products.map(item => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
