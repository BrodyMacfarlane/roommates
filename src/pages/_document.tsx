import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>roommates</title>
        <link rel='stylesheet' href='https://use.typekit.net/uen7rts.css' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <meta name='theme-color' content='#6622CC' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
