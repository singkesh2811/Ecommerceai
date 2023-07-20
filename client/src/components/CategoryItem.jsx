import styled from "styled-components";
import React from "react";
import {Link} from 'react-router-dom';
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    font-weight:200;
  }
`;
const CategoryItem = (props) => {
  return (
    <Container>
      <Link to={`/products/${props.cat}`}>
        <Image src={props.img}></Image>
        <Info>
          <Title>{props.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};


export default CategoryItem;
