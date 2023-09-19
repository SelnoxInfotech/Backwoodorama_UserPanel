import React from 'react';

const NewProductinfoText = ({Product }) => {
   
    return (
        <div className="w-100 mx-1 mt-4">
            <div className="newProductAboutUs_container py-4">
                <h2 className="newProductAboutUs_headings">{Product.heading} </h2>
                {/* <p className="newProductAboutUs_container_para">
                   
                    {Product.text}
                </p> */}
                <div className='newProductAboutUs_description'  dangerouslySetInnerHTML={{ __html: Product.text }}  />

            </div>

        </div>
    )
}
export default NewProductinfoText 