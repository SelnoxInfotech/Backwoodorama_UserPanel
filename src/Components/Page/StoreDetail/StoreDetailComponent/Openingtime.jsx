import React from 'react'

const Openingtime = ({storeDetails , heading , type}) => {
  return (
    <div className="opning_time border p-3">
                            <h4>{heading}</h4>
                                <hr></hr>
                                {
                                    storeDetails[0]?.Hours !== null &&  storeDetails[0]?.Hours.map((items , index )=>{
                                      return <p>{`${items.day} :- ${items.Open[0].Time1}-${items.Open[0].Time2}`}</p>
                                    })
                                  
                                }
                            </div>
  )
}

export default Openingtime