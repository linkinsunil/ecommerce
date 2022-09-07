import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import ProductCard from '../components/ProductCard';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <ProductCard page='home' />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
