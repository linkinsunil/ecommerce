import { useState } from 'react';
import styled from 'styled-components';
import { useCart } from '../context/cartContext';
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
  flex-direction: column;

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

const InputBox = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CheckBoxInput = styled.input.attrs({ type: 'checkbox' })``;

const RadioInput = styled.input.attrs({ type: 'radio' })``;

const InputLabel = styled.label`
  font-size: 12px;
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
  const {
    state: { filterByPrice, filterByCategory, sortByPrice, filterByRating },
  } = useCart();

  const { dispatch } = useCart();

  const handleRating = i => {
    dispatch({ type: 'FILTER_BY_RATING', payload: i + 1 });
  };

  return (
    <Container>
      <FilterContainer>
        <FilterText id='category'>Filter Products:</FilterText>
        <Filter>
          <InputBox>
            <CheckBoxInput
              name='category'
              value='mens'
              checked={filterByCategory.includes('mens')}
              onChange={e =>
                dispatch({
                  type: 'FILTER_BY_CATEGORY',
                  payload: e.target.value,
                })
              }
            />
            <InputLabel>Men</InputLabel>
          </InputBox>
          <InputBox>
            <CheckBoxInput
              name='category'
              value='womens'
              checked={filterByCategory.includes('womens')}
              onChange={e =>
                dispatch({
                  type: 'FILTER_BY_CATEGORY',
                  payload: e.target.value,
                })
              }
            />
            <InputLabel>Women</InputLabel>
          </InputBox>
          <InputBox>
            <CheckBoxInput
              name='category'
              value='kids'
              checked={filterByCategory.includes('kids')}
              onChange={e =>
                dispatch({
                  type: 'FILTER_BY_CATEGORY',
                  payload: e.target.value,
                })
              }
            />
            <InputLabel>Kids</InputLabel>
          </InputBox>

          <Select name='size-filter' style={{ display: 'none' }}>
            <Option value=''>Size</Option>
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
            type='range'
            step='100'
            min='100'
            max='1000'
            defaultValue={filterByPrice || 1000}
            onChange={e =>
              dispatch({ type: 'FILTER_BY_PRICE', payload: e.target.value })
            }
          />
        </Filter>

        <FilterText id='sort'>Sort by Price:</FilterText>
        <Filter>
          <InputBox>
            <RadioInput
              type='radio'
              name='price-sort'
              checked={sortByPrice && sortByPrice === 'lth'}
              onChange={e =>
                dispatch({ type: 'SORT_BY_PRICE', payload: 'lth' })
              }
            />
            <InputLabel id='lth'>Low to High</InputLabel>
          </InputBox>
          <InputBox>
            <RadioInput
              type='radio'
              name='price-sort'
              checked={sortByPrice && sortByPrice === 'htl'}
              onChange={e =>
                dispatch({ type: 'SORT_BY_PRICE', payload: 'htl' })
              }
            />
            <InputLabel id='htl'>High to Low</InputLabel>
          </InputBox>
        </Filter>

        <FilterText id='rating'>Rating:</FilterText>
        <Rating
          rating={filterByRating}
          onClick={i => handleRating(i)}
          style={{ cursor: 'pointer' }}
        />

        <Button onClick={() => dispatch({ type: 'CLEAR_FILTERS' })}>
          CLEAR FILTERS
        </Button>
      </FilterContainer>
    </Container>
  );
};

export default Filters;
