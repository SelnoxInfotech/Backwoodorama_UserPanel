import React from 'react'
import './termconditions.css';
import { Link } from 'react-router-dom';
import {FaFacebookF } from "react-icons/fa";
import {MdEmail } from "react-icons/md";
import HomePageDealsSignup from '../Home/Dashboard/ComponentDashboard/HomePageDealsSignup';
const Termsconditions = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <div className='term_condition'>
      <div className="container-fluid">
        <div className="tc_hero">
          <h3 className="page_heading">  Weedx.io Cookies policy</h3>
        </div>

        <div className="row tc_content justify-content-between">
         <div className="col-md-7 tc_main-centent"> 
            <ol>
              <li id='etuw'>
                <span className='question'>Introduction</span>
                <span className="answer">
                Welcome to weedx.io (the "Website"), owned and operated by selnox infotech ("we," "us," "our"). This Cookie Policy explains how we use cookies and similar tracking technologies when you access or use our Website.
                </span>
              </li>
              <li id='voa'>
                <span className='question'>What Are Cookies?</span>
                <span className="answer">
                Cookies are small text files that are placed on your device when you visit a website. They help websites remember your preferences, enhance your browsing experience, and collect information about your usage.
                </span>
              </li>
              <li id='pp'>
                <span className='question'> Types of Cookies We Use</span>
                <span className="answer">
                We may use the following types of cookies:

                Essential Cookies: These cookies are necessary for the basic functioning of our Website and enable you to access and navigate our Website.

                Analytical/Performance Cookies: These cookies help us analyze how users interact with our Website, allowing us to improve its performance and user experience.

                Functionality Cookies: These cookies remember your preferences and choices, such as language or region settings, to enhance your experience.

                Targeting/Advertising Cookies: These cookies are used to deliver relevant advertisements and content to you based on your interests and online behavior.

                </span>
              </li>
              <li id='ur'>
                <span className='question'> How We Use Cookies</span>
                <span className="answer">
                    We use cookies for various purposes, including:
                    Recognizing your device when you visit our Website.
                    Remembering your preferences and settings.
                    Analyzing user behavior to improve our Website.
                    Delivering targeted advertisements.
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
              <li> <a href="#aot">1.  Introduction</a> </li>
              <li> <a href="#etuw"> 2. What Are Cookies? </a></li>
              <li> <a href="#voa"> 3. Types of Cookies We Use </a></li>
              <li> <a href="#pp">4. How We Use Cookies</a></li>
              <li> <a href="#ur"> 5. Managing Your Cookie Preferences </a></li>
              <li> <a href="#oods">6. Third-Party Cookies</a></li>
              <li> <a href="#drl"> 7. Changes to This Cookie Policy </a></li>
              <li> <a href="#cwll"> 8. Contact Us </a></li>
              
            </ul>
           </div>
         </div>
         <div className="col-md-12 tc_main-centent"> 
            <ol className='secondlist'>
              <li></li>
              <li></li>

              <li></li>
              <li></li>
             
              <li id='oods'>
                <span className='question'> Managing Your Cookie Preferences</span>
                <span className="answer">
                You can manage your cookie preferences through your browser settings. Most browsers allow you to control cookies, including accepting or rejecting them and deleting existing cookies.
                </span>
              </li>
              <li id='drl'>
                <span className='question'> Third-Party Cookies </span>
                <span className="answer">
                We may allow third-party service providers to place cookies on our Website to analyze user behavior and deliver targeted advertisements. These third-party cookies are subject to the privacy policies of the respective providers.
                </span>
              </li>
              <li id='cwll'>
                <span className='question'>Changes to This Cookie Policy </span>
                <span className="answer">
                We may update this Cookie Policy to reflect changes in our cookie usage practices. We will post the updated Cookie Policy on this page with a revised "Last Updated" date.
                </span>
              </li>
              <li id='ip'>
                <span className='question'>Contact Us</span>
                <span className="answer">
                If you have any questions, concerns, or requests regarding this Cookie Policy, please contact us at mailto:info@weedx.io
                </span>
              </li>
         
              
             
            </ol>
         </div>
        </div>
      </div>
    </div>
    <HomePageDealsSignup></HomePageDealsSignup>
    </>
  )
}

export default Termsconditions