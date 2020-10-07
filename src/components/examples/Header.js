import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const {
    site: {
      siteMetadata: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(graphql`
    {
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
  `)
  return (
    <div>
      <h1>Title: {title}</h1>
      <h1>Name: {name}</h1>
    </div>
  )
}

export default ComponentName
