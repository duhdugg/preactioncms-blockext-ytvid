import React from 'react'
import PropTypes from 'prop-types'

function Ytvid(props) {
  let url = new URL(`https://www.youtube.com/embed/${props.videoId}`)
  if (props.privacyEnhancedMode) {
    url.host = 'www.youtube-nocookie.com'
  }
  if (props.hidePlayerControls) {
    url.searchParams.set('controls', '0')
  }
  if (props.startAt) {
    url.searchParams.set('start', props.startAt)
  }
  const iframeRef = React.useRef()
  const [height, setHeight] = React.useState(315)
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (iframeRef.current) {
        const h = Math.ceil(iframeRef.current.clientWidth / 1.7777777777777777)
        if (iframeRef.current.clientHeight !== h) {
          setHeight(h)
        }
      }
    }, 500)
    return () => {
      clearInterval(interval)
    }
  })
  return (
    <div>
      {!!props.videoId ? (
        <iframe
          ref={iframeRef}
          width='100%'
          height={height}
          src={url.href}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      ) : (
        ''
      )}
    </div>
  )
}

Ytvid.propTypes = {
  hidePlayerControls: PropTypes.bool,
  preaction: PropTypes.object.isRequired,
  privacyEnhancedMode: PropTypes.bool,
  startAt: PropTypes.string,
  videoId: PropTypes.string.isRequired,
}

Ytvid.extensionType = 'block'
Ytvid.label = 'Youtube Video'
Ytvid.defaultProps = {
  hidePlayerControls: false,
  privacyEnhancedMode: false,
  startAt: '',
  videoId: '',
}

export default Ytvid
