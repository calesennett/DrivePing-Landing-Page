import React, {
  useRef,
  useEffect
} from "react"
import logo from '../images/drive_ping.png';
import {
  Link
} from 'gatsby';

import {
  Grid,
  Box,
  Image,
  Container
} from 'theme-ui';

import gsap from 'gsap';

function Header() {
  const headerRef = useRef(null)

  useEffect(() => {
    gsap.from([headerRef.current], {
      y: '-200px',
      autoAlpha: 0,
      duration: 0.5,
      ease: 'expo'
    })
  })

  return (
    <Container
      ref={headerRef}
      sx={{
        px: [2, null, 0],
        visibility: 'hidden'
      }}>
      <Grid
        columns={'1fr 3fr'}
        sx={{
          alignItems: 'center'
        }}>
        <Link
          to='/'>
          <Image width='100' src={logo} />
        </Link>
        <Box
          sx={{
            justifySelf: 'end'
          }}>
        </Box>
      </Grid>
    </Container>
  )
}

export default Header
