import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { Typography } from '@material-ui/core'

const IndexPage = () => {
  useEffect(() => {
    // add a listener to 'message' channel
    if (global && global.ipcRenderer) {
      global.ipcRenderer.addListener('message', (_event, args) => {
        alert(args)
      })
    }
  }, [])

  const onSayHiClick = () => {
    if (global && global.ipcRenderer) {
      global.ipcRenderer.send('message', 'hi from next')
    }
  }

  return (
    <Layout title="Home | Next.js + TypeScript + Electron Example">
      <h1>Hello Next.js 👋</h1>
      <button onClick={onSayHiClick}>Say hi to electron</button>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <Typography variant='h1'>Material-Ui</Typography>
    </Layout>
  )
}

export default IndexPage
