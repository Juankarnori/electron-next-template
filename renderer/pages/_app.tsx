import '../styles/globals.css'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import type { AppProps } from 'next/app'
import { lightTheme } from '../themes'
// import { SWRConfig } from 'swr'
// import { CssBaseline, ThemeProvider } from '@mui/material'
// import { lightTheme } from '@/themes'
// import { AuthProvider, RecetaProvider, UiProvider } from '@/context'
// import { DeviceProvider } from '@/context/device'

export default function App({ Component, pageProps }: AppProps) {
  return (

    <ThemeProvider theme={ lightTheme }>
    <CssBaseline />
    <Component {...pageProps} />
    </ThemeProvider>

  )
}