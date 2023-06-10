import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

// Components
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => (
  <div>
    <Head>
      <title>Digital Matter</title>
      <meta name='viewport' content='initial-scale=1, viewport-fit=cover' key='viewport' />
      <link rel='shortcut icon' href='/dm_favicon.ico' type='image/ico' />
    </Head>

    <Header />
    {props.children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
