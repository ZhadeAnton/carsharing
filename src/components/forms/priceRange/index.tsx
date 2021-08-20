import React from 'react'

interface Props {
  minPrice: number,
  maxPrice: number
}

export default function PriceRange(props: Props) {
  return (
    <div>
      <h5>
        Цена:
      </h5>

      <h6>
        от { props.minPrice } до { props.maxPrice }&#8381;
      </h6>
    </div>
  )
}
