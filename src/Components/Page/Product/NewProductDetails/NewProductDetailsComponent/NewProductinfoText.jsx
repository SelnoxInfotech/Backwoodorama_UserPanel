import React from 'react';

const NewProductinfoText = ({Product }) => {
    const [readopen , setreadopen] = React.useState(true)
    function textgive(text){
        let arrofstr = text.split(' ');
        let finalstr = ""
        if( arrofstr.length >= 100  && readopen){
           
              for(let i=0 ; i<100 ; i++){
                finalstr += `${arrofstr[i]} `
              }
        }else{
          finalstr = text
        }
        return finalstr
    }
    console.log(Product.text ,'terf')
    return (
        <div className="w-100 mx-1 mt-4">
            <div className="newProductAboutUs_container py-4">
                <h2 className="newProductAboutUs_headings">{Product.heading} </h2>
                
                <div className='newProductAboutUs_description'  dangerouslySetInnerHTML={{ __html: Product.text }}  />
                            {/* <p>{textgive(Product.text )}   { Product.text.split(' ').length >= 100 &&<span className='band_shlebtn' onClick={()=>setreadopen(!readopen)}>Read { readopen ? "More" : "Less"}</span>}</p> */}

            </div>

        </div>
    )
}
export default NewProductinfoText 