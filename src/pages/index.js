import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => {
  // console.log("DATA", data.allMarkdownRemark.edges)
  console.log('DATA', data)
  const content = data.allMarkdownRemark.edges

  return (
    <section>
      <div className='container'>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </div>
      {content.map(
        ({
          node: {
            frontmatter: { title, description, price, image }
          }
        }) => {
          return (
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
              <p>{price}</p>
              <img src={image.slice(7)} alt='' />
            </div>
          )
        }
      )}
    </section>
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
