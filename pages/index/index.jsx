import React, { Component } from 'react'
import Head from 'next/head'
import LazyHydrate from 'react-lazy-hydration'
import { client, linkResolver } from '../../prismic-configuration'
import Prismic from 'prismic-javascript'

import Fonts from '../../fonts'

import ContactForm from '../../components/contactForm'
import Logo from '../../components/logo'
import Stack from '../../components/stack'
import Slice from '../../components/slices/home'

import '../../styles/main.scss'
import './styles.scss'

class Home extends Component {
  componentDidMount () {
    Fonts()
  }
  
  render () {
    let body = this.props.home.data

    if (!body) {
      return (
        <div>error</div>
      )
    } else {
      return (
        <>
        <Head>
          <meta name="description" content={body.meta_description} />
        </Head>
        <Stack widest>
          <section className="above-the-fold">
            <LazyHydrate ssrOnly>
              <div className="container">
                <div className="brand">
                  <Logo color="#151715" />
                  <h1 className="sr-only">Timon Forrer</h1>
                  <p className="lead">Webentwicklung und Medienproduktion</p>
                </div>
              </div>
            </LazyHydrate>
          </section>

          {body.body.map((item, index) => <Slice {...item} key={`homeslice-${index}`} />)}

          <section className="contact">
            <div className="container">
              <Stack wider>
                <h2>Interessiert?<br/>Lass uns zusammen&shy;arbeiten.</h2>
                <ContactForm />
              </Stack>
            </div>
          </section>
        </Stack>
        </>
      )
    }
  }
}

Home.getInitialProps = async context => {
  const home = await client.getSingle('home', {
    'fetchLinks': [
      'work.client',
      'work.business',
      'work.type_of_project',
      'work.cover',
      'work.backdrop',
      'work.final_website',
      'work.video'
    ]
  })
  return { home }
}

export default Home
