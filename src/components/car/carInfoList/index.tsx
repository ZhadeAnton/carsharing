import React from 'react'

import './styles.scss'
import { ICheckbox } from '../../../interfaces/inputInterfaces'
import CarInfoField from '../carInfoField'

interface Props {
  carCheckboxes: Array<ICheckbox>
}

export default function CarInfoList(props: Props) {
  return (
    <ul className='car-info-list'>
      {
        props.carCheckboxes.map((item) => {
          if (item.isChecked) {
            return (
              <li
                key={item.id}
                className='car-info-list__item'
              >
                <CarInfoField
                  title={item.value}
                  value={item.info}
                />
              </li>
            )
          }
        })
      }
    </ul>
  )
}
