import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Hello! My name is El-Abror"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,500;0,600;1,200;1,500;1,600&display=optional" rel="stylesheet"></link>
        <meta name="keywords" content="mohamadelabror, mohamad, el, abror, developer, frontend, designer"></meta>
        <meta name="author" content='el-abror'></meta>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <link rel="icon" type="image/x-icon" href="/images/header-logo.svg"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}