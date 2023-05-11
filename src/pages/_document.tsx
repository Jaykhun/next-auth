import Header from '@/components/Header'
import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document