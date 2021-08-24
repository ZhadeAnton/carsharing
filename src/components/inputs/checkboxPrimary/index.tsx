import React from 'react'

import './styles.scss'

interface Props {
  value: string,
  checked: boolean
}

export default function CheckboxPrimary(props: Props) {
  return (
    <div>
      <input
        className="checkbox-custom"
        name="checkbox-custom"
        type="checkbox"
        checked={props.checked}
      />

      <label
        htmlFor="checkbox-custom"
        className="checkbox-custom-label"
      >
        { props.value }
      </label>
    </div>
  )
}
