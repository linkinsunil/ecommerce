import { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import Rating from './Rating';

const Container = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  ${mobile({ justifyContent: 'space-around' })}
`;

const Filter = styled.div`
  margin: 20px;
  display: flex;

  ${mobile({ margin: '0 20px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.label`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

  ${mobile({ marginRight: '0px' })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border-bottom: 0.5px solid #e2d2d2 ${mobile({ margin: '10px 0' })};
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

const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  color: black;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

const Filters = () => {
  const [value, setValue] = useState(5000);
  const [rate, setRate] = useState(3);

  const handleSliderChange = e => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <FilterContainer>
        <FilterText id='category'>Filter Products:</FilterText>
        <Filter>
          <Select name='category-filter' htmlFor='category'>
            <Option value='select-category'>Category</Option>
            <Option value='men'>Men</Option>
            <Option value='women'>Women</Option>
            <Option value='Kids'>Kids</Option>
          </Select>
          <Select name='size-filter'>
            <Option value='select-size'>Size</Option>
            <Option value='xs'>XS</Option>
            <Option value='s'>S</Option>
            <Option value='m'>M</Option>
            <Option value='l'>L</Option>
            <Option value='xl'>XL</Option>
          </Select>
        </Filter>

        <FilterText id='price'>Filter Price:</FilterText>
        <Filter>
          <RangeInput
            htmlFor='price'
            name='price-range'
            type='range'
            step='500'
            min='0'
            max='5000'
            defaultValue={value}
            onChange={handleSliderChange}
          />
        </Filter>

        <FilterText id='sort'>Sort Products:</FilterText>
        <Filter>
          <Select name='price-sort' htmlFor='sort'>
            <Option>Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc'>Price (desc)</Option>
          </Select>
        </Filter>

        <FilterText id='rating'>Rating:</FilterText>
        <Rating
          rating={rate}
          onClick={i => setRate(i + 1)}
          style={{ cursor: 'pointer' }}
        />

        <Button>CLEAR FILTERS</Button>
      </FilterContainer>
    </Container>
  );
};

export default Filters;
