import React from 'react'

import './styles.scss'

interface Props {
  fieldName: string,
  fieldInfo: string
}

export default function OrderField(props: Props) {
  return (
    <div className='order-field'>
      <span className='order-field__name'>
        { props.fieldName }
      </span>

      <span className='order-field__info'>
        { props.fieldInfo }
      </span>
    </div>
  )
}
