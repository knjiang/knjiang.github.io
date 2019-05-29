import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SimpleCard from "../components/card1";

const SecondPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Featured Projects</h1>
    <SimpleCard></SimpleCard>
  </Layout>
)

export default SecondPage
