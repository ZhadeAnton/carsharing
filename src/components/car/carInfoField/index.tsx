import React from 'react'

import './styles.scss'

interface Props {
  title: string,
  value: string | undefined
}

export default function CarInfoField(props: Props) {
  return (
    <div className='car-field'>
      <h6 className='car-field__title'>
        { props.title }
      </h6>

      <output className='car-field__number'>
        { props.value }
      </output>
    </div>
  )
}
