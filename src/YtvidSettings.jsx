import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Input } from '@preaction/inputs'

function YtvidSettings(props) {
  return (
    <div>
      <h6>Ytvid Settings</h6>
      <hr className='mb-3' />
      <Input
        type='videoId'
        label='Video ID'
        value={props.propsData.videoId}
        valueHandler={props.getPropsDataValueHandler('videoId')}
      />
      <Input
        label='Start At'
        placeholder='0'
        value={props.propsData.startAt}
        valueHandler={props.getPropsDataValueHandler('startAt')}
      />
      <Checkbox
        label='Hide Player Controls'
        checked={!!props.propsData.hidePlayerControls}
        valueHandler={props.getPropsDataValueHandler('hidePlayerControls')}
      />
      <Checkbox
        label='Privacy Enhanced Mode'
        checked={!!props.propsData.privacyEnhancedMode}
        valueHandler={props.getPropsDataValueHandler('privacyEnhancedMode')}
      />
    </div>
  )
}

YtvidSettings.propTypes = {
  propsData: PropTypes.object.isRequired,
  getPropsDataValueHandler: PropTypes.func.isRequired,
}

export default YtvidSettings
