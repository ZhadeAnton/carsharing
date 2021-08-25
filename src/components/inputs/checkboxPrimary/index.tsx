import React from 'react'

import './styles.scss'

interface Props {
  value: string,
  checked: boolean,
  index: number,
  onChange: (position: number) => void
}

export default function CheckboxPrimary(props: Props) {
  return (
    <div>
      <input
        className="checkbox-custom"
        name="checkbox-custom"
        type="checkbox"
        checked={props.checked}
        onChange={() => props.onChange(props.index)}
      />

      <label
        htmlFor="checkbox-custom"
        className="checkbox-custom-label"
        onClick={() => props.onChange(props.index)}
      >
        { props.value }
      </label>
    </div>
  )
}
