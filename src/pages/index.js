import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from '../components/heading'
import WhyEbook from '../components/why-ebook'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading></Heading>
    <WhyEbook></WhyEbook>
  </Layout>
)

export default IndexPage
