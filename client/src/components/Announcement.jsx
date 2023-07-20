import styled from "styled-components"
import React from 'react'
import "./App.css"
const Container=styled.div`
height: 70px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
font-weight: 500;
`;
const Announcement = () => {
  return (
    <Container className="hi">
      Dhamaka Offer ! Free Delivery over Rs 1000
    </Container>
  )
}

export default Announcement
