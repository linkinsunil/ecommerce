import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
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
  gap: 1rem;

  ${mobile({
    // width: '75%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
  })}
`;

const Product = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ flexDirection: 'column' })}
`;

const ProductDetail = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 200px;
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

const Button = styled(TopButton)`
  height: min-content;
  display: flex;
  align-self: center;
  justify-self: center;
`;

const Hr = styled.hr`
  height: 0.5px;
  width: 50%;
  background-color: #e4e4e4;
  outline: none;
  border: none;
`;

const Wishlist = () => {
  const navigate = useNavigate();

  const handleGoBackToShopping = () => {
    navigate('/productList');
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR WISHLIST</Title>
        <Top>
          <TopButton onClick={handleGoBackToShopping}>
            CONTINUE SHOPPING
          </TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Product>
            <ProductDetail>
              <Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png' />
              <Details>
                <ProductName>
                  <b>Product:</b> Jimmny Shoes
                </ProductName>
                <ProductId>
                  <b>ID:</b> 2423434243224324
                </ProductId>
                <ProductColor color='black' />
                <ProductSize>
                  <b>Size:</b> 37.5
                </ProductSize>
              </Details>
            </ProductDetail>
            <Button type='filled'>ADD TO CART</Button>
          </Product>
          <Hr />
          <Product>
            <ProductDetail>
              <Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png' />
              <Details>
                <ProductName>
                  <b>Product:</b> Jimmny Shoes
                </ProductName>
                <ProductId>
                  <b>ID:</b> 2423434243224324
                </ProductId>
                <ProductColor color='black' />
                <ProductSize>
                  <b>Size:</b> 37.5
                </ProductSize>
              </Details>
            </ProductDetail>
            <Button type='filled'>ADD TO CART</Button>
          </Product>
          <Hr />
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Wishlist;
