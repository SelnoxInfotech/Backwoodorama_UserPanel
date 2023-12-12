import React from 'react'
import './Bgheader.css'

const Bgheader = ({text}) => {
  return (
    <div className='bgHedaer'>
        <span>{text}</span>
    </div>
  )
}

export default Bgheader