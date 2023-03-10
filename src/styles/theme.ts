import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    blue: '#3294f8',
    base: {
      title: '#E7EDF4',
      subtitle: '#C4D4E3',
      text: '#AFC2D4',
      span: '#7B96B2',
      label: '#3A536B',
      border: '#1C2F41',
      post: '#112131',
      profile: '#0B1B2B',
      background: '#071422',
      input: '#040F1A'
    }
  },
  fonts: {
    heading: 'Nunito',
    body: 'Nunito'
  },
  styles: {
    global: {
      body: {
        bg: 'base.background',
        color: 'base.text'
      },
      h3: {
        color: 'blue',
        textDecoration: 'underline',
        fontSize: 'xl'
      },
      code: {
        display: 'block',
        background: 'base.post',
        webkitOverflowScrolling: 'touch',
        borderRadius: 'md'
      }
    }
  }
});
