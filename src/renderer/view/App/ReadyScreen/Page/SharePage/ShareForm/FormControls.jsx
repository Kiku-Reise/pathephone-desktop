import React from 'react'
import propTypes from 'prop-types'

import MdSave from 'react-icons/lib/md/save'
import MdCancel from 'react-icons/lib/md/cancel'
import MdReset from 'react-icons/lib/md/autorenew'

import CustomButton from '~components/CustomButton.jsx'

import {
  E2E_SHARE_FORM_CANCEL_BUTTON_ID,
  E2E_SHARE_FORM_SAVE_BUTTON_ID,
  E2E_SHARE_FORM_RESET_BUTTON_ID
} from '~data/e2eConstants'

const FormControls = ({ isDisabled, onCancelClick, onResetClick }) => (
  <React.Fragment>
    <CustomButton
      className='shareFormSubmit'
      id={E2E_SHARE_FORM_SAVE_BUTTON_ID}
      disabled={isDisabled}
    >
      <span>
        <MdSave /> <small>save</small>
      </span>
    </CustomButton>
    <CustomButton
      type='button'
      id={E2E_SHARE_FORM_CANCEL_BUTTON_ID}
      className='shareFormCancel'
      disabled={isDisabled}
      onClick={onCancelClick}
    >
      <MdCancel /> <small>cancel</small>
    </CustomButton>
    <CustomButton
      type='button'
      id={E2E_SHARE_FORM_RESET_BUTTON_ID}
      className='shareFormReset'
      disabled={isDisabled}
      onClick={onResetClick}
    >
      <MdReset /> <small>reset</small>
    </CustomButton>
  </React.Fragment>
)

FormControls.propTypes = {
  isDisabled: propTypes.bool.isRequired,
  onCancelClick: propTypes.func.isRequired,
  onResetClick: propTypes.func.isRequired
}

export default FormControls