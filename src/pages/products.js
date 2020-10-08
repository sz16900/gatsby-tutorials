import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../components/products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const ComponentName = ({ data }) => {
  const {
    // nodes: products (this gives it a JS alias i.e change the name from nodes to products)
    allContentfulProduct: { nodes: products },
  } = data
  // console.log(products)

  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title} />
              <h3>
                {product.title} <span>${product.price}</span>
              </h3>
              <Link to={`/products/${product.slug}`}>more details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
      }
    }
  }
`

export default ComponentName
