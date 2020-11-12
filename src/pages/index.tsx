import { graphql } from 'gatsby'
import React from 'react'

import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Layout from '../components/layout/layout'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const BlogIndex: React.FC<Props> = ({ data, location }: Props) => {
  const posts = data.remark.posts
  const meta = data.site?.meta

  return (
    <Layout location={location}>
      <div className="container-fluid">
        <h3>HOMEPAGE</h3>
          <p>Featured News Hero</p>
          <div className="row">
            <div className="col-md-6 text-center">
              <img width="630px" src="https://image.cnbcfm.com/api/v1/image/106772351-1604153519355-gettyimages-1229367424-775583195.jpeg?v=1604153604&w=830&h=554" />
            </div>
            <div className="col-md-6 text-center">
              <img width="630px" src="https://stg-01image.cnbcfm.com/api/v1/image/106772351-1604153519355-gettyimages-1229367424-775583195.jpeg?v=1604153604&w=830&h=554" />
            </div>
          </div>

          <p sx={{paddingTop: `80px`, clear: `both`}}>Secondary Card</p>
          <div className="row">
            <div className="col-md-6 text-center">
              <img width="300px" src="https://image.cnbcfm.com/api/v1/image/106767137-16039247802020-10-02t174033z_381573885_rc2haj9issfu_rtrmadp_0_health-coronavirus-usa-trump.jpeg?v=1603924843&w=600&h=338" />
            </div>
            <div className="col-md-6 text-center">
              <img width="300px" src="https://stg-01image.cnbcfm.com/api/v1/image/106767137-16039247802020-10-02t174033z_381573885_rc2haj9issfu_rtrmadp_0_health-coronavirus-usa-trump.jpeg?v=1603924843&w=600&h=338" />
            </div>
          </div>

          <p sx={{paddingTop: `80px`, clear: `both`}}>RiverPlus</p>
          <div className="row">
            <div className="col-md-6 text-center">
              <img width="120px" src="https://image.cnbcfm.com/api/v1/image/106600558-1593656269814pequotlakesmn_exterior.jpg?v=1594039292&w=240&h=180" />
            </div>
            <div className="col-md-6 text-center">
              <img width="120px" src="https://stg-01image.cnbcfm.com/api/v1/image/106600558-1593656269814pequotlakesmn_exterior.jpg?v=1594039292&w=240&h=180" />
            </div>
          </div>

          <p sx={{paddingTop: `80px`, clear: `both`}}>River Breaker</p>
          <div className="row">
            <div className="col-md-6 text-center">
              <img width="299.5px" src="https://image.cnbcfm.com/api/v1/image/106770882-1604059922687-gettyimages-1282911628-cn9i4897_2020102941050620.jpeg?v=1604060944&w=600&h=400" />
            </div>
            <div className="col-md-6 text-center">
              <img width="299.5px" src="https://stg-01image.cnbcfm.com/api/v1/image/106770882-1604059922687-gettyimages-1282911628-cn9i4897_2020102941050620.jpeg?v=1604060944&w=600&h=400" />
            </div>
          </div>

          <p sx={{paddingTop: `80px`, clear: `both`}}>Topic Town Large</p>
          <div className="row">
            <div className="col-md-6 text-center">
              <img width="620px" src="https://image.cnbcfm.com/api/v1/image/106771185-1604069065021-gettyimages-1229230523-PGONCHAR_3E8661.jpeg?v=1604069091&w=1260&h=630" />
            </div>
            <div className="col-md-6 text-center">
              <img width="620px" src="https://stg-01image.cnbcfm.com/api/v1/image/106771185-1604069065021-gettyimages-1229230523-PGONCHAR_3E8661.jpeg?v=1604069091&w=1260&h=630" />
            </div>
          </div>

          <p sx={{paddingTop: `80px`, clear: `both`}}>Topic Town Medium</p>
          <div className="row">
            <div className="col-md-6 text-center">
              <img width="309.98px" src="https://image.cnbcfm.com/api/v1/image/106764482-1603831831149-young-european-woman-in-protective-disposable-medical-black-mask-in-city-outdoor-concept-protection_t20_b6lrRX.jpg?v=1603831908&w=600&h=630" />
            </div>
            <div className="col-md-6 text-center">
              <img width="309.98px" src="https://stg-01image.cnbcfm.com/api/v1/image/106764482-1603831831149-young-european-woman-in-protective-disposable-medical-black-mask-in-city-outdoor-concept-protection_t20_b6lrRX.jpg?v=1603831908&w=600&h=630" />
            </div>
          </div>

          <p sx={{paddingTop: `80px`, clear: `both`}}>Topic Town Small</p>
          <div className="row">
            <div className="col-md-6 text-center">
              <img width="299.98px" src="https://image.cnbcfm.com/api/v1/image/106771630-1604087845398-gettyimages-1281786707-nz6_7638.jpeg?v=1604087867&w=600&h=300" />
            </div>
            <div className="col-md-6 text-center">
              <img width="299.98px" src="https://stg-01image.cnbcfm.com/api/v1/image/106771630-1604087845398-gettyimages-1281786707-nz6_7638.jpeg?v=1604087867&w=600&h=300" />
            </div>
          </div>
          <p sx={{marginTop: `20px`}}><strong>Note:</strong> The video player on homepage is not requesting images through the image service and looks worse that the components that are...skipped!</p>

          <h3 sx={{marginTop: `80px`, clear: `both`}}>CNBC ARTICLE</h3>
          <p>Inline Image</p>
          <div className="row">
            <div className="col-md-6 text-center">
              <img width="740px" src="https://image.cnbcfm.com/api/v1/image/106769281-1604000962993-gettyimages-1229243527-_q5i5466.jpeg?v=1604082024&w=740&h=416" />
            </div>
            <div className="col-md-6 text-center">
              <img width="740px" src="https://stg-01image.cnbcfm.com/api/v1/image/106769281-1604000962993-gettyimages-1229243527-_q5i5466.jpeg?v=1604082024&w=740&h=416" />
            </div>
          </div>

          <h3 sx={{paddingTop: `80px`, clear: `both`}}>CNBC GUIDE</h3>
          <p>Inline Image</p>
          <div className="row">
            <div className="col-md-6 text-center">
              <img width="740px" src="https://image.cnbcfm.com/api/v1/image/106762046-1603738548830-PF_Guide_Age_Based_20s.png?v=1604079161&w=740&h=416" />
            </div>
            <div className="col-md-6 text-center">
              <img width="740px" src="https://stg-01image.cnbcfm.com/api/v1/image/106762046-1603738548830-PF_Guide_Age_Based_20s.png?v=1604079161&w=740&h=416" />
            </div>
          </div>

          <h3 sx={{paddingTop: `80px`, clear: `both`}}>ACORNS ARTICLE</h3>
          <p>Inline Image</p>
          <div className="row">
            <div className="col-md-6 text-center">
              <img width="740px" src="https://image.cnbcfm.com/api/v1/image/106762081-1603740113534-smiling-african-american-millennial-woman-wear-headphones-talk-video-calling-using-laptop-teach_t20_3gnNvw.jpg?v=1603740203&w=1400&h=950" />
            </div>
            <div className="col-md-6 text-center">
              <img width="740px" src="https://stg-01image.cnbcfm.com/api/v1/image/106762081-1603740113534-smiling-african-american-millennial-woman-wear-headphones-talk-video-calling-using-laptop-teach_t20_3gnNvw.jpg?v=1603740203&w=1400&h=950" />
            </div>
          </div>

          <h3 sx={{paddingTop: `80px`, clear: `both`}}>MAKEIT ARTICLE</h3>
          <p>Inline Image</p>
          <div className="row">
            <div className="col-md-6 text-center">
              <img width="700px" src="https://image.cnbcfm.com/api/v1/image/106759353-1603484095742-bid.jpg?v=1603484145&w=1400&h=950" />
            </div>
            <div className="col-md-6 text-center">
              <img width="700px" src="https://stg-01image.cnbcfm.com/api/v1/image/106759353-1603484095742-bid.jpg?v=1603484145&w=1400&h=950" />
            </div>
          </div>

          <h3 sx={{paddingTop: `80px`, clear: `both`}}>SELECT GUIDE</h3>
          <p>Inline Image</p>
          <div className="row">
            <div className="col-md-6 text-center">
              <img width="850px" src="https://image.cnbcfm.com/api/v1/image/106574517-1591906499338gettyimages-1168910832.jpg?v=1591906545&w=1400&h=950" />
            </div>
            <div className="col-md-6 text-center">
              <img width="850px" src="https://stg-01image.cnbcfm.com/api/v1/image/106574517-1591906499338gettyimages-1168910832.jpg?v=1591906545&w=1400&h=950" />
            </div>
          </div>

          <h3 sx={{paddingTop: `80px`, clear: `both`}}>SELECT ARTICLE</h3>
          <p>Inline Image</p>
          <div className="row">
            <div className="col-md-6 text-center">
              <img width="850px" src="https://image.cnbcfm.com/api/v1/image/106703584-1600197303006-gettyimages-1165117034-pi-1945368.jpeg?v=1600197357&w=1400&h=950" />
            </div>
            <div className="col-md-6 text-center">
              <img width="850px" src="https://stg-01image.cnbcfm.com/api/v1/image/106703584-1600197303006-gettyimages-1165117034-pi-1945368.jpeg?v=1600197357&w=1400&h=950" />
            </div>
          </div>

          <h3 sx={{paddingTop: `80px`, clear: `both`}}>SECTION</h3>
          

          <p>Featured Card</p>
          <div className="row">
            <div className="col-md-6 text-center">
              <img width="620px" src="https://image.cnbcfm.com/api/v1/image/106772325-1604152905555-gettyimages-1229367598-AFP_8U968T.jpeg?v=1604152949&w=1260&h=630" />
            </div>
            <div className="col-md-6 text-center">
              <img width="620px" src="https://stg-01image.cnbcfm.com/api/v1/image/106772325-1604152905555-gettyimages-1229367598-AFP_8U968T.jpeg?v=1604152949&w=1260&h=630" />
            </div>
          </div>

          <p>Square Media Card</p>
          <div className="row">
            <div className="col-md-6 text-center">
              <img width="309.98px" src="https://image.cnbcfm.com/api/v1/image/106765904-1603892856531-gettyimages-963571596-HOME_PRICES.jpeg?v=1603892958&w=600&h=630" />
            </div>
            <div className="col-md-6 text-center">
              <img width="309.98px" src="https://stg-01image.cnbcfm.com/api/v1/image/106765904-1603892856531-gettyimages-963571596-HOME_PRICES.jpeg?v=1603892958&w=600&h=630" />
            </div>
          </div>

          

          <p>Threeup Card</p>
          <div className="row">
            <div className="col-md-6 text-center">
              <img width="299.98px" src="https://image.cnbcfm.com/api/v1/image/106713941-1600865612965-gettyimages-1228659365-364831701_1-3.jpeg?v=1600865652&w=600&h=338" />
            </div>
            <div className="col-md-6 text-center">
              <img width="299.98px" src="https://stg-01image.cnbcfm.com/api/v1/image/106713941-1600865612965-gettyimages-1228659365-364831701_1-3.jpeg?v=1600865652&w=600&h=338" />
            </div>
          </div>

          
        </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        twitter
        adsense
      }
    }
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            category
            tags
            description
            date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
