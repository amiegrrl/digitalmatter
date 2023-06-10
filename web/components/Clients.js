import React, { useState } from 'react'
import PropTypes from 'prop-types'
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import FadeIn from './FadeIn'

const Clients = (props) => {
  const { clients } = props
  const builder = imageUrlBuilder(client)
  const urlFor = function urlFor(source) {
    return builder.image(source)
  }

  const [isShowing, setShowing] = useState(false)
  const logos = clients
    ? clients.map((c, idx) => <div className={`logo-wrapper ${idx < 8 ? 'sample' : ''}`} key={c._id}><img src={urlFor(c.logo).format('png').url()} alt={c.title} /></div>)
    : ''

  return (
    <div className='clients'>
      <FadeIn>
        <div className='clients__intro'>
          <div className='mint'>
            <span className='eyebrow eyebrow--clear-blue'>Who we work with</span>
          </div>
        </div>

        <div className={`clients__grid ${isShowing ? 'show-all' : ''}`}>
          {logos}
        </div>

        <div className='clients__button'>
          <button type='button' onClick={() => setShowing(!isShowing)}>
            {isShowing ? 'Hide Clients' : 'All Clients'}
          </button>
        </div>
      </FadeIn>
    </div>
  )
}

Clients.propTypes = {
  clients: PropTypes.array,
}

export default Clients
