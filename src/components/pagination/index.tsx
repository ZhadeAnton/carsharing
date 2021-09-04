import React, { useState } from 'react'
import { Pagination } from 'antd';

import './styles.scss'

interface Props {
  pagesLength: number,
  defaultPageSize: number,
  onChange: (page: number) => void
}

export default function CustomPagination(props: Props) {
  const [current, setCurrent] = useState(1)

  const handleChangePagination = (page: number) => {
    props.onChange(page)
    setCurrent(page)
  }

  return (
    <Pagination
      current={current}
      total={props.pagesLength - props.defaultPageSize}
      pageSize={props.defaultPageSize}
      showSizeChanger={false}
      hideOnSinglePage={true}
      showLessItems
      onChange={handleChangePagination}
      itemRender={(_, type, originalContent) => {
        switch (type) {
          case 'prev':
            return (
              <div className='pagination__button'>
                &laquo;
              </div>
            )

          case 'next':
            return (
              <div className='pagination__button'>
                &raquo;
              </div>
            )

          case 'jump-prev':
            return (
              <div className='pagination__dots'>
                ...
              </div>
            )

          case 'jump-next':
            return (
              <div className='pagination__dots'>
                ...
              </div>
            )

          default:
            return originalContent
        }
      }}
    />
  )
}
