import { Search, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 35%;
  margin: 10px 0 0 0;
  padding: 10px;
  outline: none;
`;

const PasswordContainer = styled.div`
  flex: 1;
  margin: 10px 0 0 0;
  border: 0.5px solid grey;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 3px;
  height: 30px;
`;

const PasswordInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  min-width: 35%;
  padding: 10px;
  ${mobile({ width: '50px' })}
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Link = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;

const Register = () => {
  const [pwdType, setPwdType] = useState({
    pwd1: 'password',
    pwd2: 'password',
  });
  const navigate = useNavigate();

  console.log(pwdType);
  console.log(pwdType.pwd1);
  console.log(pwdType.pwd2);
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder='name' />
          <Input placeholder='last name' />
          <Input placeholder='username' />
          <Input placeholder='email' />
          <PasswordContainer>
            <PasswordInput type={pwdType.pwd1} placeholder='password' />
            {pwdType.pwd1 === 'password' ? (
              <VisibilityOff
                style={{ color: 'grey', fontSize: '16px' }}
                onClick={() =>
                  setPwdType({
                    ...pwdType,
                    pwd1: pwdType.pwd1 === 'password' ? 'text' : 'password',
                  })
                }
              />
            ) : (
              <Visibility
                style={{ color: 'grey', fontSize: '16px' }}
                onClick={() =>
                  setPwdType({
                    ...pwdType,
                    pwd1: pwdType.pwd1 === 'password' ? 'text' : 'password',
                  })
                }
              />
            )}
          </PasswordContainer>
          <PasswordContainer>
            <PasswordInput
              type={pwdType.pwd2}
              placeholder='consfirm password'
            />
            {pwdType.pwd2 === 'password' ? (
              <VisibilityOff
                style={{ color: 'grey', fontSize: '16px' }}
                onClick={() =>
                  setPwdType({
                    ...pwdType,
                    pwd2: pwdType.pwd2 === 'password' ? 'text' : 'password',
                  })
                }
              />
            ) : (
              <Visibility
                style={{ color: 'grey', fontSize: '16px' }}
                onClick={() =>
                  setPwdType({
                    ...pwdType,
                    pwd2: pwdType.pwd2 === 'password' ? 'text' : 'password',
                  })
                }
              />
            )}
          </PasswordContainer>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b> |{' '}
            <Link onClick={() => navigate('/login')}>
              Already have an account
            </Link>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
