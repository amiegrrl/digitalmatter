import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const FadeIn = (props) => {
  const [isVisible, setVisible] = useState(true)
  const domRef = useRef()

  useEffect(() => {
    /* global IntersectionObserver */
    /* eslint no-undef: 2 */

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })

    const options = {
      threshold: 0.95,
    }

    const { current } = domRef

    io.observe(current, options)

    return () => io.unobserve(current)
  }, [])

  return (
    <div className={`fade-in ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      {props.children}
    </div>
  )
}

FadeIn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
}

export default FadeIn
