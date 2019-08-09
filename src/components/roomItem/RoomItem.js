import React from 'react'
// import { Img } from 'gatsby-image'
import {
  ItemContainer,
  ContentContainer,
  Head,
  Text,
  BookButton,
  ImageContainer,
  ItemImage,
  Price,
  Cost,
  Overview
} from './styles'

const RoomItem = ({ title, description, price, image }) => (
  <ItemContainer>
    <ImageContainer>
      <ItemImage src={image.slice(7)} alt='' />
      <Price>
        <Cost>
          <p>{price}UAH</p>
          <p>single</p>
        </Cost>
        <Overview>
          <p>комната</p>
        </Overview>
      </Price>
    </ImageContainer>
    <ContentContainer>
      <Head>{title}</Head>
      <Text>{description}</Text>
      <BookButton href='#'>Забронировать</BookButton>
    </ContentContainer>
  </ItemContainer>
)

export default RoomItem
