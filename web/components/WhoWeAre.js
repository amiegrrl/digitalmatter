import React from 'react'
import FadeIn from './FadeIn'

const WhoWeAre = () => {
  return (
    <div className='who-we-are split'>
      <div id='about' className='who-we-are__text has-hash-link'>
        <FadeIn>
          <div className='mint'>
            <span className='eyebrow eyebrow--clear-blue'>Who we are</span>
          </div>
          <h3>Clarity<br />Confidence<br />Control</h3>
          <p>In an increasingly complex and competitive marketing landscape, top brands demand solutions that optimize performance, the insights and intelligence to drive potential, and results that exceed expectations.</p>
          <p>Digital Matter gives meaning and momentum to performance marketing.</p>
        </FadeIn>
      </div>

      <div className='who-we-are__image'>
        <img src='/who_we_are.jpg' alt='women looking at rooftops' />
      </div>
    </div >
  )
}

export default WhoWeAre
