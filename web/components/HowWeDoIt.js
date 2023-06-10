import React from 'react'
import { useMediaQuery } from 'react-responsive'
import FadeIn from './FadeIn'

const HowWeDoIt = () => {
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })

  return (
    <div className='how-we-do-it split'>
      <img src='/DM_LOGO_LETTERMARK_blue.png' alt='Digital Matter logo lettermark' />
      <div className='how-we-do-it__intro'>
        <FadeIn>
          <span className='eyebrow eyebrow--clear-blue'>How we do it</span>
          <h3 className='desktop-only'>Driving end-to-end performance</h3>
          <h3 className='mobile-only'>Driving<br />end-to-end<br />performance</h3>
          <p>We’ve developed an integrated approach that starts with a deep understanding of your business and your goals. Using data-driven agile-marketing approaches to drive results immediately, we build top-notch marketing capabilities for our clients, and transform their marketing organizations.</p>
          <p>Analytics, advisement, optimization, and migrations customized to create peak performance.</p>
        </FadeIn>
      </div>

      <div className='how-we-do-it__list'>
        <FadeIn>
          <ul>
            <li>
              <span className='eyebrow'>01</span>
              <p>Data Mining {isTabletOrMobile && <br />}& Analytics</p>
            </li>
            <li>
              <span className='eyebrow'>02</span>
              <p>Campaign Management & Optimization</p>
            </li>
            <li>
              <span className='eyebrow'>03</span>
              <p>Consolidated Reporting</p>
            </li>
            <li>
              <span className='eyebrow'>04</span>
              <p>Transformation & Migration</p>
            </li>
            <li>
              <span className='eyebrow'>05</span>
              <p>Team & System Development</p>
            </li>
          </ul>
        </FadeIn>
      </div>
    </div >
  )
}

export default HowWeDoIt
