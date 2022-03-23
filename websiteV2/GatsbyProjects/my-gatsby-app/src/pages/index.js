import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import WorkExperience from "../containers/experience/WorkExperience"
// import { Global } from '@emotion/core'

const IndexPage = () => (
  <Layout style={{background: 'black'  }}>
    <Seo title="Home" />
    {/* <h1>Jonathan Madden</h1>
    <p>Software Engineer</p> */}
    <StaticImage
      src="../images/background.jpeg"
      // width={300}
      // quality={95}
      formats={["auto", "webp", "avif"]}
      alt="background"
      style={{ 
        root: {
          background: 'black',
          backgroundColor: 'black'
        },
        // marginBottom: `0rem`,
        background: 'black'  
      }}
    />
    <WorkExperience/>
    
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
