import { FavoriteBorderTwoTone, SearchTwoTone, ShoppingCartTwoTone } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
const Circle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Image = styled.img`
  height: 70%;
  z-index: 2;
  object-fit: cover; /* Ensures the image fills the container while maintaining its aspect ratio */
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover {
    ${Info} {
      opacity: 1;
      width: 100%;
      height: 100%;
    }
  }
`;
const Product = ({item,key}) => {
  return (
    <Container>
      <Circle>
        <Image src={item.img} />
        <Info>
        <Icon>
        <ShoppingCartTwoTone></ShoppingCartTwoTone>
        </Icon>
        <Icon>
            <Link to={`/product/${item._id}`}>
            <SearchTwoTone></SearchTwoTone>
            </Link>
        </Icon>
        <Icon>
        <FavoriteBorderTwoTone></FavoriteBorderTwoTone>
        </Icon>
        </Info>
      </Circle>
    </Container>
  )
}

export default Product
