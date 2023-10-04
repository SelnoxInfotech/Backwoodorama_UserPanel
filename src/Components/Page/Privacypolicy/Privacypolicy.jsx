import React from 'react'
import { Link } from 'react-router-dom';
import {FaFacebookF } from "react-icons/fa";
import {MdEmail } from "react-icons/md";
import Newsletter from '../../Component/Newsletter/HomePageDealsSignup';
import {PrivacyPolicy}  from "../../Component/ScoPage/CommenpageSeo"
const Privacypolicy = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <div className='term_condition'>
      <PrivacyPolicy></PrivacyPolicy>
      <div className="container-fluid">
        <div className="tc_hero">
          <h3 className="page_heading">  Weedx.io Privacy policy  </h3>
        </div>

        <div className="row tc_content justify-content-between">
         <div className="col-md-7 tc_main-centent"> 
            <ol>
              <li id='etuw'>
                <span className='question'> Introduction</span>
                <span className="answer">
                Welcome to weedx.io (the "Website"), owned and operated by selnox infotech  ("we," "us," "our"). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you access or use our Website.
                </span>
              </li>
              <li id='voa'>
                <span className='question'>Information We Collect</span>
                <span className="answer">
                We may collect the following types of information:

                Personal Information: This may include your name, email address, contact information, and any other information you provide when using our Website.

                Usage Information: We may collect information about how you access and use our Website, including your IP address, device information, browser type, and pages you visit.
                </span>
              </li>
              <li id='pp'>
                <span className='question'>How We Use Your Information</span>
                <span className="answer">We may use your information for various purposes, including:

              Providing and improving our services.

              Communicating with you, including responding to your inquiries and requests.

              Customizing and enhancing your experience on our Website.

              Complying with legal and regulatory requirements.


              </span>
              </li>
              <li id='ur'>
                <span className='question'>Sharing Your Information</span>
                <span className="answer">
                We may share your information with third parties for the following purposes:
                Service Providers: We may share your information with third-party service providers who assist us in delivering and improving our services.
                Legal Requirements: We may disclose your information to comply with legal obligations or respond to lawful requests from authorities.
                </span>
              </li>
              <li id='oods'>
                <span className='question'>Cookies and Tracking Technologies</span>
                <span className="answer">
                We may use cookies and similar tracking technologies to collect information about your browsing activities on our Website. You can manage your cookie preferences through your browser settings.
                </span>
              </li>
              <li id='drl'>
                <span className='question'> Your Choices </span>
                <span className="answer">
                You can access and update your personal information by [provide instructions for updating information]. You may also opt-out of receiving promotional communications from us.

                </span>
              </li>
              <li id='cwll'>
                <span className='question'> Security </span>
                <span className="answer">
                We take reasonable measures to protect your information from unauthorized access and use. However, no data transmission over the internet is entirely secure, and we cannot guarantee the security of your information.
                </span>
              </li>
              <li id='ip'>
                <span className='question'>Children's Privacy</span>
                <span className="answer">
                Our Website is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a child under 18, please contact us immediately.
                </span>
              </li>
              <li id='lol'>
                <span className='question'>Changes to This Privacy Policy</span>
                <span className="answer">
                We may update this Privacy Policy to reflect changes to our information practices. We will post the updated Privacy Policy on this page with a revised "Last Updated" date.
                </span>
              </li>
              <li id='ctt'>
                <span className='question'>Contact Us</span>
                <span className="answer">
                If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at mailto:info@weedx.io.
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
              <li> <a href="#aot">1. Introduction</a> </li>
              <li> <a href="#etuw">2. Information We Collect</a></li>
              <li> <a href="#voa"> 3. How We Use Your Information  </a></li>
              <li> <a href="#pp">4. Sharing Your Information</a></li>
              <li> <a href="#ur"> 5. Cookies and Tracking Technologies </a></li>
              <li> <a href="#oods"> 6. Your Choices</a></li>
              <li> <a href="#drl">  7. Security </a></li>
              <li> <a href="#cwll"> 8. Children's Privacy </a></li>
              <li> <a href="#ip">  9. Changes to This Privacy Policy </a></li>
              <li> <a href="#lol">10. Contact Us </a></li>
             
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

export default Privacypolicy