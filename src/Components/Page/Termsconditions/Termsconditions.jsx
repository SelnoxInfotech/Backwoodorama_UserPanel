import React from 'react'
import Newsletter from '../../Component/Newsletter/HomePageDealsSignup';
import { TermsAndConditions } from '../../Component/ScoPage/CommenpageSeo';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
const Termsconditions = () => {
 
  const ref = useRef(null);
  const [offset, setOffset] = React.useState(0);
  const [Id, setId] = React.useState("");
 const allHeigths = []
  React.useEffect(() => {
    window.scrollTo(0, 0)
    
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [])
  let divElement = document.getElementById('Navbar_box')?.clientHeight
  React.useEffect(()=>{
    ref.current.childNodes.forEach((item , index)=>{
      allHeigths.push({
       topheigth: item.offsetTop,
       id : item.id,
       height : item.clientHeight
      })
    })
   
    for(let i=0 ; i < allHeigths.length -1 ; i++){
       if(offset > allHeigths[i].topheigth - divElement - 100   && offset < allHeigths[i+1].topheigth - divElement ){
        setId(allHeigths[i].id)
       }else if(offset < allHeigths[0].topheigth){
        setId(allHeigths[0].id)
        
       }else if(offset > allHeigths[allHeigths.length -1].topheigth){
        setId(allHeigths[allHeigths.length -1].id)
        
       }
    }
  },[offset])

  function gothroughID(ID){
  
    allHeigths.forEach((item)=>{
      if(item.id === ID){
        window.scrollTo(0, item.topheigth - divElement)
      }
    })
  }
  
  return (
    <>
      <div className='term_condition'>
        <TermsAndConditions></TermsAndConditions>
        <div className="container-fluid">
          <div className="tc_hero">
            <h3 className="page_heading">  Website Terms and Conditions  </h3>
          </div>

          <div className="row tc_content justify-content-between" >
          <div className="col-md-7 tc_main-centent"> 
              <ol ref={ref} >
                <li id='first'>
                  <span className='question'>Acceptance of Terms</span>
                  <span className="answer">
                      By accessing or using weedx.io, you agree to abide by these 
                      Terms and Conditions. If you do not agree with any part of these 
                      terms, you should not use the website.
                  </span>
                </li>
                <li id='etuw'>
                  <span className='question'>Eligibility to Use Website</span>
                  <span className="answer">
                    By using weedx.io, you represent and warrant that you are at 
                    least 18 years of age or the legal age for cannabis consumption 
                    in your jurisdiction. If you are under the legal age for cannabis 
                    consumption in your jurisdiction, you may not use this website.
                  </span>
                </li>
                <li id='voa'>
                  <span className='question'>Verification of Age</span>
                  <span className="answer">weedx.io reserves the right to verify the age of users and may 
                        request additional information or documentation to confirm 
                        eligibility. Failure to provide accurate age information or comply 
                        with age verification requests may result in the suspension or 
                        termination of your account and access to the website.</span>
                </li>
                <li id='pp'>
                  <span className='question'>Privacy Policy</span>
                  <span className="answer">Your use of the website is also governed by our <Link to={'/privacy-policy'}>Privacy Policy</Link>, 
                    which can be found. By using the website, you consent to 
                    the practices outlined in the <Link to={'/privacy-policy'}>Privacy Policy</Link>.</span>
                </li>
                <li id='ur'>
                  <span className='question'>User Registration</span>
                  <span className="answer">
                    To access certain features of the website, you may be required 
                    to register for an account. You are responsible for maintaining 
                    the confidentiality of your account information and for all 
                    activities that occur under your account.
                  </span>
                </li>
                <li id='oods'>
                  <span className='question'> Online Ordering and Delivery Services </span>
                  <span className="answer">
                    <b>a.</b> Online ordering and delivery services may be available in certain areas. Users are responsible for 
                    compliance with local laws regarding the purchase and consumption of cannabis.
                    </span>
                    <span className="answer">
                    <b>b.</b> weedx.io is not responsible for the quality, safety, or legality of the products offered by dispensaries or
                    retailers listed on the platform.
                  </span>
                </li>
                <li id='drl'>
                  <span className='question'>  Dispensary and Retailer Listings </span>
                  <span className="answer">
                  <b>a.</b> Dispensary and retailer listings are provided for informational purposes only. weedx.io does not 
                  endorse or guarantee the quality of products or services offered by listed dispensaries or retailers.
                  </span>
                  <span className="answer">
                  <b>b.</b> Users are encouraged to conduct their research and due diligence before making any purchases.
                   </span>
                </li>
                <li id='cwll'>
                  <span className='question'>   Compliance with Local Laws</span>
                  <span className="answer">
                    Users are responsible for ensuring compliance with local laws and regulations regarding the possession, 
                    purchase, and use of cannabis. weedx.io does not provide legal advice.
                  </span>
                </li>
                <li id='ip'>
                  <span className='question'> Intellectual Property </span>
                  <span className="answer">
                  <b> a.</b> The content and materials on weedx.io, including logos, text, images, and trademarks, are protected by 
                  intellectual property rights and are the property of weedx.io.
                  </span>
                  <span className="answer">
                  <b>b.</b> Users may not use, reproduce, or distribute any content from the website without prior written 
                  permission.
                  </span>
                </li>
                <li id='lol'>
                  <span className='question'>  Limitation of Liability</span>
                  <span className="answer">
                      weedx.io is not liable for any direct, indirect, incidental, special, or consequential damages arising out of 
                      or in any way connected to the use of the website.

                  </span>
                </li> 
                <li id='ctt'>
                  <span className='question'> Changes to Terms</span>
                  <span className="answer">
                  weedx.io reserves the right to modify or revise these Terms and Conditions at any time without notice. 
                    Your continued use of the website after such changes will constitute your acceptance of the revised 
                    terms.
                  </span>
                </li>
                <li id='termination'>
                  <span className='question' >Termination</span>
                  <span className="answer">
                    weedx.io reserves the right to terminate or suspend your account and access to the website at its 
                    discretion, without prior notice, for any violation of these terms or for any other reason.

                  </span>
                </li>

              </ol>
          </div>
          <div className="col-md-4"> 
            <div className="tc_topic_list">
              <div className="heading_box">
              <h3 className='text-white m-0 sideTableHeading'>Table of Contents</h3>
              </div>
              <ul>
                <li onClick={()=>{gothroughID("first")}} className={Id === "first" && "activeTable"  }>1. Acceptance of Terms </li>
                <li onClick={()=>{gothroughID("etuw" )}} className={Id === "etuw" && "activeTable"  }> 2.  Eligibility to Use Website </li>
                <li onClick={()=>{gothroughID("voa")}} className={Id === "voa" && "activeTable"  }>  3. Verification of Age  </li>
                <li onClick={()=>{gothroughID("pp")}} className={Id === "pp" && "activeTable"  }>  4.  Privacy Policy</li>
                <li onClick={()=>{gothroughID("ur")}} className={Id === "ur" && "activeTable"  }> 5.  User Registration </li>
                <li onClick={()=>{gothroughID("oods")}} className={Id === "oods" && "activeTable"  }> 6.   Online Ordering & Delivery Services</li>
                <li onClick={()=>{gothroughID("drl")}} className={Id === "drl" && "activeTable"  }>  7. Dispensary and Retailer Listings </li>
                <li onClick={()=>{gothroughID("cwll")}} className={Id === "cwll" && "activeTable"  }>  8.  Compliance with Local Laws </li>
                <li onClick={()=>{gothroughID("ip")}} className={Id === "ip" && "activeTable"  }>  9. Intellectual Property </li>
                <li onClick={()=>{gothroughID("lol")}} className={Id === "lol" && "activeTable"  }> 10.  Limitation of Liability </li>
                <li onClick={()=>{gothroughID("ctt")}} className={Id === "ctt" && "activeTable"  }>  11. Changes to Terms  </li>
                <li onClick={()=>{gothroughID("termination")}} className={Id === "termination" && "activeTable"  }> 12. Termination  </li>
              </ul>
            </div>
          </div>
          
          </div>
        </div>
      </div>
      <Newsletter></Newsletter>
    </>
  )
}

export default Termsconditions