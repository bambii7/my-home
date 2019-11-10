import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';
import { DataText, ExperienceBox } from "../components/dev/experience.styles";
import { TextSection, InfoStarter } from "../styles/pages.sc";
import { Title, SubTitle } from "./blog-post.styles";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    
    return (
      <Layout>
        <InfoStarter>
          <TextSection>
            <ExperienceBox>
              <article>
                <header>
                  <Title>
                    {post.frontmatter.title}
                  </Title>
                  <SubTitle>
                    {post.frontmatter.abstract}
                  </SubTitle>
                </header>
                <DataText dangerouslySetInnerHTML={{ __html: post.html }} />
                <hr/>
              </article>
            </ExperienceBox>
          </TextSection>
        </InfoStarter>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        abstract
      }
    }
  }
`