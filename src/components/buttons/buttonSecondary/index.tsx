import React from 'react'

interface Props {
  children: string
}

export default function ButtonSecondary(props: Props) {
  return (
    <button>
      { props.children }
    </button>
  )
}
