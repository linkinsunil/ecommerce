import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Filters from '../components/Filter';
import ProductCard from '../components/ProductCard';

const Container = styled.div``;

const ProductPage = styled.div`
  display: flex;
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <ProductPage>
        <Filters />
        <ProductCard page='productList' />
      </ProductPage>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
