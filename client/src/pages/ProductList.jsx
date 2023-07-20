import React from 'react'
import Navbar from "../components/Navbar";
import styled from 'styled-components';
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Newsletter from '../components/Newsletter';
import Products from "../components/Products"
import { useLocation } from "react-router";
import { useState } from "react";
const Container = styled.div``;

const Title = styled.h1`
margin-top:50px;
margin-left:20px;
`;
const Kesh=styled.div`
margin-top=500x;
padding -top: 100px;
height:7px;
background-color:gray;
`;
const Ji=styled.div`
height:5px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option=styled.option``;
const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Announcement></Announcement>
      <Navbar></Navbar>
      <Ji></Ji>
      <Kesh></Kesh>
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
            <Select name="color" onChange={handleFilters}>
            <Option disabled>
              Color
            </Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>White</Option>
              <Option>Green</Option>
              <Option>Yellow</Option>
              <Option>Purple</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
            <Option disabled>
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
        <FilterText>Sort Products:</FilterText>
          <Select  onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} ></Products>
      <Newsletter>
      </Newsletter>
      <Footer></Footer>

    </Container>
  )
}

export default ProductList
