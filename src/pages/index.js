import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => {
  console.log('DATA', data.allImageSharp.edges[0].node.fluid.originalImg)
  return (
    <section>
      <div className='container'>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </div>
      <p>{data.allImageSharp.edges[0].node.fluid.originalName}</p>
      <p>{data.allImageSharp.edges[0].node.fluid.presentationWidth}</p>
      <p>{data.allImageSharp.edges[0].node.fluid.presentationHeight}</p>
      {/* <Img src={data.allImageSharp.edges[0].node.fluid.originalImg} /> */}
    </section>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    allImageSharp {
      edges {
        node {
          fluid {
            originalName
            originalImg
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  }
`

// {/* <div>
//         <h2>{name}</h2>
//       </div>
//       <div>
//         <p>{description}</p>
//       </div>
//       <div>
//         <p>{price}</p>
//       </div>
//       <img src={image} /> */}
