import { blue, cyan, deepOrange, orange, red, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#1e88e5',
        },
        secondary: {
          main: '#1e88e5',
        },
        navbar: '#ffffff',
        search: '#f0f2f5',
        content: '#f0f0f0',
        dark: '#000',
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#1e88e5',
        },
        secondary: {
          main: '#1e88e5',
        },
        navbar: '#242526',
        search: '#3a3b3c',
        content: '#18191a',
        dark: '#fff',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
      variants: [
        {
          props: { variant: 'icon-hover' },
          style: {
            ':hover': {
              backgroundColor: '#f0f0f0',
            },
          },
        },
      ],
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: '0',
        },
      },
    },
    MuiListItemText: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            color: red,
          },
        },
        {
          props: { variant: 'chat' },
          style: {
            fontSize: '14px',
            fontWeight: 700,
          },
        },
      ],
    },
  },
})
