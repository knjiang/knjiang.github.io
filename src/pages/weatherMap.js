import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from '@material-ui/core/Button';
import Video1 from "../components/weathervid"

const weatherMap = () => (
  <Layout>
    <SEO title="WeatherMap!" />
    <h1>WeatherMap!</h1>
    <Video1></Video1>
    <Button size="small" component ={Link} to = "/projects" style={{
        font: "Roboto",
        fontWeight: "bold",
        color: "#0d7373"
    }}>Back to Projects</Button>
  </Layout>
)

export default weatherMap