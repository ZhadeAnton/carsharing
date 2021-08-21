import React from 'react'
import { Breadcrumb } from 'antd';

import './styles.scss'
import { ReactComponent as BreadArrow } from '../../assets/SVG/bread-arrow.svg'

interface Props {
  activeIdx: number
}

const breads = ['Местоположение', 'Модель', 'Дополнительно', 'Итого']

export default function Breadcrumbs(props: Props) {
  return (
    <Breadcrumb
      separator={false}
      className='breadcrumb'
    >
      {
        breads.map((bread, i) => (
          <Breadcrumb.Item
            key={bread}
            className={`${props.activeIdx === i ?
                'breadcrumb__item-active' : 'breadcrumb__item'}`}
          >
            <div className='breadcrumb__item__wrapper'>
              <span className='breadcrumb__item__wrapper--title'>
                { bread }
              </span>

              <span className='breadcrumb__item__wrapper--arrow'>
                { i !== breads.length - 1 && <BreadArrow/> }
              </span>
            </div>
          </Breadcrumb.Item>
        ))
      }
    </Breadcrumb>
  )
}
