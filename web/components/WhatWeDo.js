import React from 'react'
import FadeIn from './FadeIn'

const WhatWeDo = () => {
  return (
    <div className='what-we-do split'>
      <img src='/what_we_do.jpg' />
      <div className='what-we-do__intro'>
        <FadeIn>
          <span className='eyebrow eyebrow--clear-blue'>What we do</span>
          <h3>Performance<br />5X the industry<br />standard</h3>
          <p>We don’t just talk about potential—we deliver it. Information is only as good as impact you create with it. Data is a commodity—how you read it, shape it, and direct it is what matters. We bring a deep consultative and creative expertise to analytics that create client confidence in every action they take to bring meaningful results to performance marketing.</p>
        </FadeIn>
      </div>

      <div className='what-we-do__list'>
        <FadeIn>
          <span>A phased approach to driving performance control:</span>
          <ul>
            <li>
              <img src='/Approach_icons/marketing_crm_icon.png' />
              <span className='eyebrow'>01</span>
              <p>Data Mining & Customer Analytics</p>
            </li>
            <li>
              <img src='/Approach_icons/perf_market_icon.png' />
              <span className='eyebrow'>02</span>
              <p>Performance Marketing Optimization</p>
            </li>
            <li>
              <img src='/Approach_icons/stack_mix_icon.png' />
              <span className='eyebrow'>03</span>
              <p>Team & Process Development</p>
            </li>
            <li>
              <img src='/Approach_icons/biz_trans_icon.png' />
              <span className='eyebrow'>04</span>
              <p>Business Transformation</p>
            </li>
            <li>
              <span className='eyebrow'>05</span>
              <img src='/Approach_icons/migration_icon.png' />
              <p>Advisory</p>
            </li>
          </ul>
        </FadeIn>
      </div>
    </div >
  )
}

export default WhatWeDo
