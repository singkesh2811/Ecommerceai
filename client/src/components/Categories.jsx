import styled from 'styled-components'
import { categories } from '../data'
import React from 'react'
import CategoryItem from './CategoryItem'
const Container = styled.div`
display: flex;
  padding: 20px;
  justify-content: space-between;

`
const Categories = () => {
    // console.log(item);
    return (
        <Container>
            {
                categories.map((data) => (
                <CategoryItem img={data.img} title={data.title} key={data.id} cat={data.cat} />
            ))}
        </Container>
    )
}

export default Categories
