import React from 'react'
import App from 'next/app'
import Head from 'next/head'

class Layout extends React.Component {
  render () {
    const { children } = this.props
    return (
      <div>
        <Head>
          <title>Timon Forrer &ndash; Webentwicklung und Medienproduktion</title>
          <link rel="shortcut icon" type="image/png" href="/images/favicon.png"/>
          <link rel="manifest" href="/manifest.json" />
          <meta charSet="utf-8" />
          <script defer src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        </Head>
        <main>{children}</main>
      </div>
    )
  }
}

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
