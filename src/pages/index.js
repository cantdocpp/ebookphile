import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from '../components/heading'
import WhyEbook from '../components/why-ebook'
import WhyUs from '../components/why-us'
import Faq from '../components/faq'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading></Heading>
    <WhyEbook></WhyEbook>
    <WhyUs></WhyUs>
    <Faq></Faq>
  </Layout>
)

export default IndexPage
