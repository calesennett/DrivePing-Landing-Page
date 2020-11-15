import React, {
  useEffect
} from "react"

import {
  Grid,
  Box,
} from 'theme-ui';

import Message from './message';

import gsap from 'gsap';

function MessageContainer() {
  useEffect(() => {
    gsap.to('.message', {
      autoAlpha: 1,
      display: 'block',
      y: '-20px',
      duration: 1,
      stagger: 1.5,
      ease: 'expo',
      delay: 2.5,
      loop: true
    })
  })
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '12%',
        bottom: '10%',
      }}>
      <Grid
        gap={2}
        columns={'1fr 3fr'}
        sx={{
          py: 2
        }}>
        <Box></Box>
        <Box
          sx={{
            justifySelf: 'end'
          }}>
          <Message type='to' text='Start driving for 1 hour' />
        </Box>
      </Grid>
      <Grid
        gap={2}
        sx={{
          justifyItems: 'start'
        }}>
        <Message type='from' text='Starting your drive for an hour.' />
        {[...Array(4)].map((val, idx) => {
          return <Message type='from' key={idx} />
        })}
      </Grid>
      <Grid
        gap={2}
        columns={'1fr 3fr'}
        sx={{
          py: 2
        }}>
        <Box></Box>
        <Box
          sx={{
            justifySelf: 'end'
          }}>
          <Message type='to' text='Done driving' />
        </Box>
      </Grid>
      <Grid
        gap={2}
        sx={{
          justifyItems: 'start'
        }}>
        <Message type='from' text="Thanks for using DrivePing!" />
      </Grid>
    </Box>
  )
}

export default MessageContainer
