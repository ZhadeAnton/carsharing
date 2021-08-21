import React from 'react'

import './styles.scss'
import PhoneNumber from '../phoneNumber'

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        &copy; 2016-2019 &laquo;Need for drive&raquo;
      </p>

      <div className='footer__number'>
        <PhoneNumber />
      </div>
    </footer>
  )
}
