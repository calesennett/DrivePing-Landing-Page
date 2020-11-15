import React from "react"

import {
  ThemeProvider,
  Box
} from 'theme-ui'
import theme from '../components/theme';

import SEO from "../components/seo"
import Header from '../components/header';
import CopySection from '../components/copySection';
import Footer from '../components/footer';
import '../components/fonts.css';

const IndexPage = () => (
  <ThemeProvider
    theme={theme}>
    <SEO title='Home' />
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
      }}>
      <Header />
      <Box
        sx={{
          margin: 'auto 0'
        }}>
        <CopySection />
      </Box>
      <Footer />
    </Box>
  </ThemeProvider>
)

export default IndexPage
