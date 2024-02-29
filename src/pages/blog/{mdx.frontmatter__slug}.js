import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image
      }
    }
  }
`

const BlogPost = ({ data, children }) => {
  // const image = getImage(data.mdx.frontmatter.hero_image)

  // console.log(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <img
        src={data.mdx.frontmatter.hero_image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost