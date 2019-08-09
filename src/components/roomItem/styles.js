import styled from 'styled-components'

export const ItemContainer = styled.article`
  max-width: 940px;
  height: 290px;
  margin: 10px 10px 90px 10px;
  sborder: 1px solid lightgrey;
  box-shadow: inset 0 0 0 5px rgba(200, 200, 200, 0.1),
    0 0 5px 0 rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: row;
`

export const ImageContainer = styled.div`
  width: 400px;
  height: auto;
`
export const ItemImage = styled.img`
  width: auto;
  max-width: 100%;
  height: 290px;
  max-height: 100%;
  object-fit: contain;
  object-position: top right;
`

export const ContentContainer = styled.div`
  width: 60%;
  padding: 20px 50px;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Head = styled.h2`
  color: #464646;
  font-weight: 500;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  margin-bottom: 10px;
`

export const Text = styled.p`
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  margin-bottom: 10px;
`

export const BookButton = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  width: 165px;
  align-self: center;
  background-color: rgb(141, 198, 63);
  border-radius: 3px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  border: 0;
  padding: 10px;
  text-align: center;
  vertical-align: baseline;
  width: 200px;
  height: 40px;
`

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  bottom: 65px;
  left: 20px;
  display: flex;
  flex-direction: row;
  width: 200px;
  height: fit-content;
`

export const Cost = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  color: #fff;
  padding: 20px 0;
  /* text-align: center;
  vertical-align: middle; */

  background-color: #99c355;
  border: 4px solid #ffffff;
  border-radius: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #ffffff;
`
export const Overview = styled.p`
font-family: "Roboto", sans-serif;
font-size: 14px;
width: 90px;
    padding: 5px 15px 5px 20px;
    /* position: absolute;
    left: 90px;
    bottom: -12px; */
    background: rgba(0,0,0,.6);
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,.5);
    font-size: 14px;
    line-height: 16px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

  /* background-color: rgba(55, 55, 55, 0.6);
  font-family: "Arial", serif;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff; */
`
