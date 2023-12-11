import React from 'react'
import Newsletter from '../../Component/Newsletter/HomePageDealsSignup';
import { CookiesPolicy } from '../../Component/ScoPage/CommenpageSeo';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
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
  let divElement = document.getElementById('Navbar_box').clientHeight
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
        document.documentElement.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant", // Optional if you want to skip the scrolling animation
      });
      }
    })
  }
  return (
    <>
    <CookiesPolicy></CookiesPolicy>
    <div className='term_condition'>
      <div className="container-fluid">
        <div className="tc_hero">
          <h3 className="page_heading">  Weedx.io Cookies policy</h3>
        </div>

        <div className="row tc_content justify-content-between">
         <div className="col-md-7 tc_main-centent"> 
            <ol ref={ref}>
              <li id='aot'>
                <span className='question'>Introduction</span>
                <span className="answer">
                Welcome to <Link>weedx.io</Link>  (the "Website"), owned and operated by selnox infotech ("we," "us," "our"). This Cookie Policy explains how we use cookies and similar tracking technologies when you access or use our Website.
                </span>
              </li>
              <li id='etuw'>
                <span className='question'>What Are Cookies?</span>
                <span className="answer">
                Cookies are small text files that are placed on your device when you visit a website. They help websites remember your preferences, enhance your browsing experience, and collect information about your usage.
                </span>
              </li>
              <li id='voa'>
                <span className='question'> Types of Cookies We Use</span>
                <span className="answer">
                We may use the following types of cookies:

                Essential Cookies: These cookies are necessary for the basic functioning of our Website and enable you to access and navigate our Website.

                Analytical/Performance Cookies: These cookies help us analyze how users interact with our Website, allowing us to improve its performance and user experience.

                Functionality Cookies: These cookies remember your preferences and choices, such as language or region settings, to enhance your experience.

                Targeting/Advertising Cookies: These cookies are used to deliver relevant advertisements and content to you based on your interests and online behavior.

                </span>
              </li>
              <li id='pp'>
                <span className='question'> How We Use Cookies</span>
                <span className="answer">
                    We use cookies for various purposes, including:
                    Recognizing your device when you visit our Website.
                    Remembering your preferences and settings.
                    Analyzing user behavior to improve our Website.
                    Delivering targeted advertisements.
                </span>
              </li>
              <li id='ur'>
                <span className='question'> Managing Your Cookie Preferences</span>
                <span className="answer">
                You can manage your cookie preferences through your browser settings. Most browsers allow you to control cookies, including accepting or rejecting them and deleting existing cookies.
                </span>
              </li>
              <li id='oods'>
                <span className='question'> Third-Party Cookies </span>
                <span className="answer">
                We may allow third-party service providers to place cookies on our Website to analyze user behavior and deliver targeted advertisements. These third-party cookies are subject to the privacy policies of the respective providers.
                </span>
              </li>
              <li id='drl'>
                <span className='question'>Changes to This Cookie Policy </span>
                <span className="answer">
                We may update this Cookie Policy to reflect changes in our cookie usage practices. We will post the updated Cookie Policy on this page with a revised "Last Updated" date.
                </span>
              </li>
              <li id='cwll'>
                <span className='question'>Contact Us</span>
                <span className="answer">
                If you have any questions, concerns, or requests regarding this Cookie Policy, please contact us at mailto:info@weedx.io
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
              <li onClick={()=>{gothroughID("aot")}} className={Id === "aot" && "activeTable"  }>1.  Introduction </li>
              <li onClick={()=>{gothroughID("etuw")}} className={Id === "etuw" && "activeTable"  }> 2. What Are Cookies? </li>
              <li onClick={()=>{gothroughID("voa")}} className={Id === "voa" && "activeTable"  }> 3. Types of Cookies We Use </li>
              <li onClick={()=>{gothroughID("pp")}} className={Id === "pp" && "activeTable"  }>4. How We Use Cookies</li>
              <li onClick={()=>{gothroughID("ur")}} className={Id === "ur" && "activeTable"  }> 5. Managing Your Cookie Preferences </li>
              <li onClick={()=>{gothroughID("oods")}} className={Id === "oods" && "activeTable"  }>6. Third-Party Cookies</li>
              <li onClick={()=>{gothroughID("drl")}} className={Id === "drl" && "activeTable"  }> 7. Changes to This Cookie Policy </li>
              <li onClick={()=>{gothroughID("cwll")}} className={Id === "cwll" && "activeTable"  }> 8. Contact Us </li>
              
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