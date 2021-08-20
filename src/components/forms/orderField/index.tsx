import React from 'react'

import './styles.scss'

interface Props {
  fieldName: string,
  fieldInfo: string
}

export default function OrderField(props: Props) {
  return (
    <div className='order-field'>
      <h6 className='order-field__name'>
        { props.fieldName }
      </h6>

      <div className='order-field__dots'/>

      <h6 className='order-field__info'>
        { props.fieldInfo }
      </h6>
    </div>
  )
}
