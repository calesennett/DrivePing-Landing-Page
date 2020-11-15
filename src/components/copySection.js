import React, {
  useEffect,
  useRef
} from "react"

import {
  Grid,
  Box,
  Container,
  Heading,
  Text,
  Image,
  Button,
  Link
} from 'theme-ui';

import iPhoneFrame from '../images/iPhone_frame__new.png';
import MessageContainer from './messageContainer';

import gsap from 'gsap';

function CopySection() {
  const headingRef = useRef(null)
  const copyRef = useRef(null)
  const buttonRef = useRef(null)
  const iPhoneFrameRef = useRef(null)

  useEffect(() => {
    gsap.from([headingRef.current], {
      autoAlpha: 0,
      y: '-20px',
      duration: 1,
      ease: 'power3.out',
      delay: 0.5
    })

    gsap.from([copyRef.current], {
      autoAlpha: 0,
      y: '-20px',
      duration: 1,
      ease: 'power3.out',
      delay: 0.75
    })

    gsap.from([buttonRef.current], {
      autoAlpha: 0,
      y: '20px',
      duration: 1,
      ease: 'power3.out',
      delay: 1
    })

    gsap.from([iPhoneFrameRef.current], {
      autoAlpha: 0,
      y: '20px',
      duration: 1,
      ease: 'power3.out',
      delay: 2
    })
  })

  return (
    <Container
      sx={{
        px: [2, null, 0]
      }}>
      <Grid
        columns={[1, null, 2]}
        sx={{
          alignItems: 'center',
          justifyItems: 'center'
        }}>
        <Box
          sx={{
            py: [3, null, 6]
          }}>
          <Heading
            ref={headingRef}
            sx={{
              fontSize: 8,
              visibility: 'hidden'
            }}>
            Arrive alive
          </Heading>
          <Text
            ref={copyRef}
            sx={{
              py: 3,
              visibility: 'hidden'
            }}>
            DrivePing uses AI and Facebook Messenger to send you one message every minute while you're driving to help keep you awake and alert.
          </Text>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href="https://m.me/105194431201524?message='hello'">
            <Button
              sx={{
                visibility: 'hidden',
                fontSize: 3,
                width: ['100%', null, 'auto']
              }}
              ref={buttonRef}>
              Start your drive
            </Button>
          </Link>
        </Box>
        <Box
          ref={iPhoneFrameRef}
          sx={{
            position: 'relative',
            overflow: 'hidden',
            visibility: 'hidden',
            zIndex: 2
          }}>
          <Image
            src={iPhoneFrame}
            sx={{
              height: '600px',
            }}
          />
          <MessageContainer />
        </Box>
      </Grid>
    </Container>
  )
}

export default CopySection
