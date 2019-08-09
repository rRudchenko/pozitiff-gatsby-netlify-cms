import React from "react"
import { graphql } from "gatsby"
import "../style.css"
import { MainContainer } from "../styles.js"

import RoomItem from "../components/roomItem/RoomItem"

const IndexPage = ({ data }) => {
  console.log("DATA", data)
  const content = data.allMarkdownRemark.edges

  return (
    <MainContainer>
      {content.map(
        (
          {
            node: {
              frontmatter: { title, description, price, image },
            },
          },
          i
        ) => {
          return (
            <RoomItem
              key={i}
              title={title}
              description={description}
              price={price}
              image={image}
            />
          )
        }
      )}
    </MainContainer>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            price
            image
          }
        }
      }
    }
  }
`
