import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style= {{
      fontWeight: "normal",
      fontSize: 22,
      textAlign: 'center',
    }}>Hello, I'm Ken.</h1>
    <p style= {{
      fontWeight: "normal",
      fontSize: 20,
      textAlign: 'center',
    }}>I'm a sophomore studying Computer Science at the University at Buffalo. 
      My current interests are in Web Development and Data Science. Feel free to browse through my website! <br></br> <br></br> If you want to get in touch,&nbsp; 
      <a href="mailto:kjiang1991@gmail.com" style = {{
        textDecoration: "none",
        color: "#0d7373",
      }}>email</a> :)</p>
  </Layout>
)

export default IndexPage
