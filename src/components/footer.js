import React, {
  useRef,
  useEffect
} from "react"

import {
  Grid,
  Text,
  Container,
  Link
} from 'theme-ui';

import gsap from 'gsap';

function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    gsap.from([footerRef.current], {
      y: '10px',
      autoAlpha: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 2
    })
  })

  return (
    <Container
      ref={footerRef}
      sx={{
        visibility: 'hidden',
        py: 3
      }}>
      <Grid
        sx={{
          justifyContent: 'center'
        }}>
        <Text
          sx={{
            fontSize: 1
          }}>
          &copy; { new Date().getFullYear() }
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='https://thrdhnd.com'
            sx={{
              px: 1,
              color: 'primary',
              fontWeight: 'bold',
              textDecoration: 'none'
            }}>
            thrdhnd.
          </Link>
          Seattle, WA.
        </Text>
      </Grid>
    </Container>
  )
}

export default Footer
