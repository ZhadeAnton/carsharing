import React, { useState } from 'react'

import CheckboxPrimary from '../../inputs/checkboxPrimary'

interface Props {
  checkboxes: Array<string>
}

export default function CheckboxGroup(props: Props) {
  const [checkedState, setCheckedState] = useState(
      new Array(props.checkboxes.length).fill(false)
  )

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    )

    setCheckedState(updatedCheckedState)
  }

  return (
    <form>
      {
        props.checkboxes.map((checkbox, i) => (
          <CheckboxPrimary
            key={i}
            value={checkbox}
            checked={checkedState[i]}
            index={i}
            onChange={handleOnChange}
          />
        ))
      }
    </form>
  )
}
