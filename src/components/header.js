import React from "react"
import logo from '../images/drive_ping.png';

import {
  Grid,
  Box,
  Image,
  Container
} from 'theme-ui';

function Header() {
  return (
    <Container>
      <Grid>
        <Image width='100' src={logo} />
        <Box
          sx={{
            justifySelf: 'end'
          }}>
          Message now
        </Box>
      </Grid>
    </Container>
  )
}

export default Header
