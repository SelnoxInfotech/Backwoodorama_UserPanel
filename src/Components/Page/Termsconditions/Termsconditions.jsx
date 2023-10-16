import React from 'react'
import { Link } from 'react-router-dom';
import {FaFacebookF } from "react-icons/fa";
import {MdEmail } from "react-icons/md";
import Newsletter from '../../Component/Newsletter/HomePageDealsSignup';
import { TermsAndConditions } from '../../Component/ScoPage/CommenpageSeo';
const Termsconditions = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <div className='term_condition'>
      <TermsAndConditions></TermsAndConditions>
      <div className="container-fluid">
        <div className="tc_hero">
          <h3 className="page_heading">  Website Terms and Conditions  </h3>
        </div>

        <div className="row tc_content justify-content-between">
         <div className="col-md-7 tc_main-centent"> 
            <ol>
              <li id='etuw'>
                <span className='question'>Acceptance of Terms</span>
                <span className="answer">
                    By accessing or using weedx.io, you agree to abide by these 
                    Terms and Conditions. If you do not agree with any part of these 
                    terms, you should not use the website.
                </span>
              </li>
              <li id='voa'>
                <span className='question'>Eligibility to Use Website</span>
                <span className="answer">
                  By using weedx.io, you represent and warrant that you are at 
                  least 18 years of age or the legal age for cannabis consumption 
                  in your jurisdiction. If you are under the legal age for cannabis 
                  consumption in your jurisdiction, you may not use this website.
                </span>
              </li>
              <li id='pp'>
                <span className='question'>Verification of Age</span>
                <span className="answer">weedx.io reserves the right to verify the age of users and may 
  request additional information or documentation to confirm 
  eligibility. Failure to provide accurate age information or comply 
  with age verification requests may result in the suspension or 
  termination of your account and access to the website.</span>
              </li>
              <li id='ur'>
                <span className='question'>Privacy Policy</span>
                <span className="answer">Your use of the website is also governed by our Privacy Policy, 
  which can be found [link ]. By using the website, you consent to 
  the practices outlined in the Privacy Policy.</span>
              </li>
              <li id='oods'>
                <span className='question'>User Registration</span>
                <span className="answer">
                  To access certain features of the website, you may be required 
                  to register for an account. You are responsible for maintaining 
                  the confidentiality of your account information and for all 
                  activities that occur under your account.
                </span>
              </li>
              <li id='drl'>
                <span className='question'> Online Ordering and Delivery Services </span>
                <span className="answer">
                a. Online ordering and delivery services may be available in certain areas. Users are responsible for 
compliance with local laws regarding the purchase and consumption of cannabis.
b. weedx.io is not responsible for the quality, safety, or legality of the products offered by dispensaries or
retailers listed on the platform.
                </span>
              </li>
              <li id='cwll'>
                <span className='question'>  Dispensary and Retailer Listings </span>
                <span className="answer">
                a. Dispensary and retailer listings are provided for informational purposes only. weedx.io does not 
endorse or guarantee the quality of products or services offered by listed dispensaries or retailers.
b. Users are encouraged to conduct their research and due diligence before making any purchases.
                </span>
              </li>
              <li id='ip'>
                <span className='question'>   Compliance with Local Laws</span>
                <span className="answer">
                  Users are responsible for ensuring compliance with local laws and regulations regarding the possession, 
                  purchase, and use of cannabis. weedx.io does not provide legal advice.
                </span>
              </li>
              <li id='lol'>
                <span className='question'> Intellectual Property </span>
                <span className="answer">
                a. The content and materials on weedx.io, including logos, text, images, and trademarks, are protected by 
                intellectual property rights and are the property of weedx.io.
                b. Users may not use, reproduce, or distribute any content from the website without prior written 
                permission.
                </span>
              </li>
              <li id='ctt'>
                <span className='question'>  Limitation of Liability</span>
                <span className="answer">
                    weedx.io is not liable for any direct, indirect, incidental, special, or consequential damages arising out of 
                    or in any way connected to the use of the website.

                </span>
              </li> 
              <li id='termination'>
                <span className='question'> Changes to Terms</span>
                <span className="answer">
                weedx.io reserves the right to modify or revise these Terms and Conditions at any time without notice. 
                  Your continued use of the website after such changes will constitute your acceptance of the revised 
                  terms.
                </span>
              </li>
              <li >
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
              <span ><Link><FaFacebookF></FaFacebookF></Link></span>
              <span><Link><MdEmail></MdEmail></Link></span>
            </div>
            <ul>
              <li> <a href="#aot">1.  Acceptance of Terms</a> </li>
              <li> <a href="#etuw"> 2.  Eligibility to Use Website </a></li>
              <li> <a href="#voa">  3. Verification of Age  </a></li>
              <li> <a href="#pp">  4.  Privacy Policy</a></li>
              <li> <a href="#ur"> 5.  User Registration </a></li>
              <li> <a href="#oods"> 6.   Online Ordering & Delivery Services</a></li>
              <li> <a href="#drl">  7. Dispensary and Retailer Listings </a></li>
              <li> <a href="#cwll">  8.  Compliance with Local Laws </a></li>
              <li> <a href="#ip">  9. Intellectual Property </a></li>
              <li> <a href="#lol"> 10.  Limitation of Liability </a></li>
              <li> <a href="#ctt">  11. Changes to Terms  </a></li>
              <li><a href="#termination"> 12. Termination </a> </li>
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