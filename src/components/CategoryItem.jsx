import { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useCart } from '../context/cartContext';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile({ height: '20vh' })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  font-weight: 600;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  const navigate = useNavigate();

  const {
    state: { products },
  } = useCart();

  const [prod, setProd] = useState([]);

  const handleCategory = item => {
    const newProd = products.filter(el => el.cat === item.title.toLowerCase());
    setProd(newProd);
    navigate('/productList');
  };

  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={() => handleCategory(item)}>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
