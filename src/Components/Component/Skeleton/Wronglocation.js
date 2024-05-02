import React from 'react'

const Wronglocation = ({title ,description}) => {
  return (
      <div className="nodatafoundcontainer">
            <img src={'/image/loation.webp'} alt='Image' />
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Change Location</button>
     </div>
  )
}

export default Wronglocation