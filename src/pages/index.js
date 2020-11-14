import React from "react"

import {
  ThemeProvider
} from 'theme-ui'
import theme from '../components/theme';

import SEO from "../components/seo"
import Header from '../components/header';

const IndexPage = () => (
  <ThemeProvider
    theme={theme}>
    <SEO title='Home' />
    <Header />
  </ThemeProvider>
)

export default IndexPage
