import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { PageTitle } from "../styles"
import { Box } from "theme-ui"
import GatsbyImg from "../components/GatsbyImage"

const SinglePOST = ({ data }) => {
  const { content, featuredImage, title } = data.wpgraphql.post

  return (
    <Layout>
      <GatsbyImg img={featuredImage} />
      <PageTitle dangerouslySetInnerHTML={{ __html: title }} />

      <p className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}
export default SinglePOST

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
        featuredImage {
          ...GatsbyImageQuery
        }
      }
    }
  }
`
