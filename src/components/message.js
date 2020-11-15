import React from "react"

import {
  Text
} from 'theme-ui';

function Message(props) {
  return (
    <Text
      className='message'
      sx={{
        display: 'none',
        visibility: 'hidden',
        zIndex: -1,
        color: props.type === 'from' ? 'rgba(0,0,0,0.8)' : 'white',
        bg: props.type === 'from' ? 'secondary' : 'primary',
        px: 3,
        py: 1,
        fontSize: 1,
        borderRadius: 100,
      }}>
      { props.text || 'Ping.' }
    </Text>
  )
}

export default Message
