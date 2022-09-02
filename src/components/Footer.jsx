import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${({ bg }) => bg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  opacity: 1;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.6;
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Payment = styled.img``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>CRAFT.</Logo>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ab
          tenetur ipsum id obcaecati sapiente facere sint, velit ad doloremque
          ipsa. Maxime iste ullam placeat cum repellat vel. Impedit, amet.
        </Desc>
        <SocialContainer>
          <SocialIcon bg='2962FF'>
            <Facebook />
          </SocialIcon>
          <SocialIcon bg='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon bg='55ACCE'>
            <Twitter />
          </SocialIcon>
          <SocialIcon bg='0072B2'>
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Associate Program</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room /> A/B Mumbai, MH, India
        </ContactItem>
        <ContactItem>
          <Phone /> +91 123 456 7890
        </ContactItem>
        <ContactItem>
          <MailOutline /> contact@craft.in
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  );
};

export default Footer;
