import React from 'react'

const Wronglocation = ({title ,description}) => {
  let image=''
  if(title.includes('dispensaries')){
    image='/image/error.webp'
  }else{
    image='/image/errorimage.webp'
  }
  return (
      <div className="nodatafoundcontainer">
            <img src={image} alt='Image' />
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Change Location</button>
     </div>
  )
}

export default Wronglocation