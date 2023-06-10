import React from 'react'

const Hero = () => {
  return (
    <div className='hero' style={{ background: 'center/cover url(/splash_page.jpg)' }}>
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className='media media--video'
        preload='auto'
      >
        <source src='/dm-video.mp4' type='video/mp4' />
      </video> */}

      <div className='hero__text' >
        <h2 className='logo'>
          <img src='/DM_LOGO_LETTERMARK_WHITE.png' alt='Digital Matter logo lettermark' />
        </h2>
        <span>Driving end-to-end performance for ambitious brands.</span>
      </div>

      <a href='#about' className='hero__more-wrapper'>
        <div className='hero__more'>
          <svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'>
            <circle id='Ellipse_2' data-name='Ellipse 2' className='cls-1' cx='250.35' cy='249.9' r='241.1' fill='#3269e8' />
            <polygon className='cls-2' points='249.96 304.07 158.19 209.17 172.06 195.76 250.02 276.38 328.7 195.73 342.51 209.2 249.96 304.07' fill='#fff' />
          </svg>
        </div>
      </a>
    </div >
  )
}

export default Hero
