import React from "react"
import Header from "../components/examples/Header"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = data

  return (
    <Layout>
      <h1>Hello from examples page</h1>
      <Header />
      <h5>author: {author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query {
    site {
      siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`

export default examples
