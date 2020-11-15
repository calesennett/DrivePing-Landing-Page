export default {
  colors: {
    background: 'white',
    primary: '#5b48ee',
    secondary: '#f1f0f0'
  },
  fonts: {
    body: 'Sohne, sans-serif',
    heading: 'Sohne, sans-serif'
  },
  sizes: {
    container: 960
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  text: {
    default: {
      fontSize: 4,
      color: 'rgba(0,0,0,0.8)'
    },
    heading: {
      color: 'primary',
      lineHeight: 'heading'
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em'
    }
  },
  buttons: {
    primary: {
      transition: 'background 150ms ease, color 150ms ease',
      cursor: 'pointer',
      fontFamily: 'body',
      padding: ['1rem 1.5rem', null, '0.5rem 1.5rem'],
      bg: 'transparent',
      color: 'primary',
      borderWidth: '2px',
      borderColor: 'primary',
      borderStyle: 'solid',
      fontWeight: 'bold',
      '&:hover': {
        bg: 'primary',
        color: 'white',
      }
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body'
    }
  }
}
