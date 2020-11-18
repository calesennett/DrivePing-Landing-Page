import React from 'react';
import {
  ThemeProvider,
  Container,
  Text,
  Heading
} from 'theme-ui';

import SEO from '../components/seo';
import Header from '../components/header';
import theme from '../components/theme';

function Disclaimer() {
  return (
    <ThemeProvider
      theme={theme}>
      <SEO title='Disclaimer' />
      <Header />
      <Container
        sx={{
          px: [2, null, 0],
          maxWidth: '30em'
        }}>
        <Heading
          sx={{
            fontSize: [4, null, 6],
            py: 3
          }}>
          Disclaimer
        </Heading>
        <Text
          sx={{
            fontSize: 3
          }}>
          The information provided by DrivePing ("we," "us" or "our") on https://driveping.com (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site. Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
        </Text>
      </Container>
    </ThemeProvider>
  )
}

export default Disclaimer
