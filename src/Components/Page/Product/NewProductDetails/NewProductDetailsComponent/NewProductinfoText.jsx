import React from 'react';

const NewProductinfoText = ({Product }) => {
    const [readopen , setreadopen] = React.useState(true)
    return (
        <div className="w-100 mx-1 mt-4">
            <div className="newProductAboutUs_container py-4">
                <h2 className="newProductAboutUs_headings">{Product.heading} </h2> 
                <div className='newProductAboutUs_description'  dangerouslySetInnerHTML={readopen ? { __html: Product.text?.split('</p>')[0] } : { __html: Product.text }}  />
                 {Product?.text?.split('</p>').length -1 > 1 && <span onClick={()=>{setreadopen(!readopen)}} className='cursor-pointer readmorebtn'>Read { readopen ? "More" : "Less"  }</span>}
                </div>
        </div> 
      

    )
}
export default NewProductinfoText 