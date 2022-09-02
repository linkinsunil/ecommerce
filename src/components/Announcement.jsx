import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      Big Billion Days: One Day Early Access To Plus Members. Avail Now And Get
      Early Access To 10 Million+ Discounted Products 🚀
    </Container>
  );
};

export default Announcement;
