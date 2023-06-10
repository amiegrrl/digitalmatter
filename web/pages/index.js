import PropTypes from 'prop-types'
import React from 'react'
import client from '../client'

import WhoWeAre from '../components/WhoWeAre'
import WhatWeDo from '../components/WhatWeDo'
import HowWeDoIt from '../components/HowWeDoIt'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

const query = `*[_type == 'client'] {
  _id, logo, title,
} | order(title asc) [0...25]`

const Index = (props) => {
  return (
    <Layout >
      <div className='main'>
        <Hero />
        <div><WhoWeAre /></div>
        <div id='services' className='has-hash-link'><WhatWeDo /></div>
        <div id='approach' className='has-hash-link'><HowWeDoIt /></div>
        <div id='clients' className='has-hash-link'><Clients clients={props.data} /></div>
        <div id='contact' className='has-hash-link'><Contact /></div>
      </div>
    </Layout>
  )
}

Index.propTypes = {
  data: PropTypes.array,
}

Index.getInitialProps = async () => {
  return {
    data: await client.fetch(query),
  }
}

export default Index
