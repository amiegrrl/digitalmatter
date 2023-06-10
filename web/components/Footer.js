import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__logo-wrapper'>
        <Link href='/'>
          <a><img src='/DM_LOGO_LETTERMARK_WHITE.png' alt='Digital Matter logo lettermark' /></a>
        </Link>
        <span>©2020 DIGITAL MATTER<br />All Rights Reserved</span>
      </div>

      <div className='footer__google'>
        <img src='/footer_images/google_partner_logo.png' alt='google logo' />
        <img src='/footer_images/FB_marketing_logo.png' alt='facebook logo' />
        <img src='/footer_images/microsoft-ads-partner-badge-white.png' alt='microsoft partners logo' />
      </div>

      <div className='footer__links eyebrow'>
        <span><Link href='/privacy-policy'><a>Privacy Policy</a></Link></span>
        {/* <span>Careers</span> */}
      </div>

      <div className='footer__socials'>
        <span className='eyebrow'>Let's stay in touch</span>
        <a href='https://www.instagram.com/dgtlmttr/' target='_blank'><img src='/footer_images/insta_icon.png' alt='instagram logo' /></a>
        <a href='https://www.facebook.com/dgtlmttr/' target='_blank'><img src='/footer_images/facebook_icon.png' alt='facebook logo' /></a>
        <a href='https://www.linkedin.com/company/dgtlmttr/' target='_blank'><img src='/footer_images/linkedin_icon.png' alt='linkedin logo' /></a>
      </div>
    </div>
  )
}

export default Footer
