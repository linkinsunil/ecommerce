import { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ justifyContent: 'space-around' })}
`;

const Filter = styled.div`
  margin: 20px;

  ${mobile({ margin: '0 20px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

  ${mobile({ marginRight: '0px' })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

  ${mobile({ margin: '10px 0' })}
`;

const Option = styled.option`
  padding: 10px;
`;

const RangeInput = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  width: 100%;
  height: 7px;
  background: #a8e1e1;
  border-radius: 5px;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: teal;
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    border: none;
  }

  ::-moz-range-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: teal;
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    border: none;
  }
`;

const Filters = () => {
  const [value, setValue] = useState(5000);

  const handleSliderChange = e => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Category
            </Option>
            <Option>Men</Option>
            <Option>Women</Option>
            <Option>Kids</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filter Price:</FilterText>
          <RangeInput
            name='price'
            type='range'
            step='500'
            min='0'
            max='5000'
            defaultValue={value}
            onChange={handleSliderChange}
          />
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
    </Container>
  );
};

export default Filters;
