import React from 'react'
import FadeIn from './FadeIn'

const Contact = () => {
  return (
    <div className='contact split'>
      <div className='word-bubble'>
        <svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3000 2000'>
          <path className='cls-1' d='M2622.34,30.25H377.66C182.5,30.25,24.29,188.46,24.29,383.62V1335.3c0,195.16,158.21,353.36,353.37,353.36h636l281.53,281.09V1688.66h1327.2c195.16,0,353.37-158.2,353.37-353.36V383.62C2975.71,188.46,2817.5,30.25,2622.34,30.25Z' fill='#3269e8' />
        </svg>
      </div>

      <div className='contact__email'>
        <span className='eyebrow eyebrow--clear-blue'>How to Reach Us</span>
        <h3>
          <a href='mailto:hello@dgtlmttr.com'>hello@dgtlmttr.com</a><br />
          {/* <span>+123 456 7899</span> */}
        </h3>
      </div>

      <div className='contact__locations'>
        <FadeIn>
          <ul>
            <li>
              <span className='eyebrow eyebrow--clear-blue'>New York</span>
              <p>300 Park Ave, 12th Floor<br />New York, NY 10021<br />U.S.A.</p>
            </li>
            <li>
              <span className='eyebrow eyebrow--clear-blue'>Portland</span>
              <p>920 SW 6th Avenue,<br />Portland, OR 97204<br />U.S.A.</p>
            </li>
            <li>
              <span className='eyebrow eyebrow--clear-blue'>San Francisco</span>
              <p>156 2nd Street,<br />San Francisco, CA 94105<br />U.S.A.</p>
            </li>
          </ul>
        </FadeIn>
      </div>
    </div>
  )
}

export default Contact
