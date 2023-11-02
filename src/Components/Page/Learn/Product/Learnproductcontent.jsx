import React from 'react'
import data from './LearnProdct.json';
import { useParams } from 'react-router-dom';
const Learnproductcontent = () => {
  const {id} = useParams()
   
  let showdata =  data.data.filter((item)=>{
   if(item.id === id){
    
    return item.content
   }
  })

  return (
    // <div className='learnproduct_content'>
    //     <h1 className="main_title">How Long Do The Effects Of Edible Substances Last?</h1>
    //     <div><img src="/image/learnproduct1.jpg" alt="" /></div>
    //     <p className=''>Nowadays, cannabis can be added to practically any meal or beverage, and edibles are a fun, sometimes strong, and delightful way to consume the plant. Furthermore, compared to other weed delivery near you and dosing techniques, edibles are considered to have more potent and long-lasting effects since they are digested. But how long do the consequences of eating actually last?</p>
    //     <p>It's not surprising that edibles have gained popularity over the past few years because they offer a handy and smokeless way to absorb marijuana. Learn more about the effects of edibles and what influences the strength and length of an edible high in the sections below.</p>
    //     <h2 className="main_title">What Are Edible Forms Of Cannabis?</h2>
    //     <p>Cannabis edibles include the traditional pot brownie, sometimes known as the "happy brownie," as well as medicated gummies, chocolate, tea, coffee, cooking oils, mints, soda, syrup, and a wide variety of other sweets.
    //     `</p>
    //     <p>For individuals who prefer a highly strong, long-lasting, smokeless, and tasty mode of dosing, edibles are a great way to consume cannabis.
    //     </p>
    //     <p>The distinction between consuming an edible and smoking or vaping</p>
    //     <p>In comparison to inhalation methods such as smoking and vaping, an edible high has a delayed onset, lasts substantially longer, and may feel more intense and euphoric. The delayed onset occurs because your stomach, intestines, and liver require time to digest and process the meal before the cannabinoids can enter your circulation.</p>
    //     <p>When THC reaches your digestive tract, it is transformed into a new molecular form known as 11-hydroxy-THC. This kind of THC passes the blood-brain barrier more easily, and many report that edibles create more intense effects than other types of intake.</p>
    //     <p>Fat can also boost the absorption of cannabis, which is why an edible containing fat may deliver a stronger and more intense experience than smoking or vaping. And, whereas the effects of smoking or vaping usually wear off in 1 to 4 hours, the effects of edibles can last up to three times as long.</p>
    //     <h2 className="main_title">How Long Does It Take For Edible Effects To Take Effect?
    //     </h2>
    //     <p>The start of effects can range from 30 minutes to two hours after intake, depending on the potency of the substance and how much you consume, as well as your size, individual metabolism, and what you've eaten that day. These factors will also have an effect on how long edibles last. According to certain studies, eating an edible on an empty stomach can result in a faster onset.
    //     </p>
    //     <p>The type of food you take also influences how quickly you feel its effects. For example, the onset of drinking a cannabis-infused beverage is often faster than meals — as short as 10 - 15 minutes — because our bodies digest liquids faster than solids.
    //     </p>
    //     <p>The same is true for delicacies that dissolve slowly in the tongue, such as hard candies, mints, and lollipops. These typically take 15 to 45 minutes to take action since the majority of cannabinoids are absorbed through tissue in the mouth and tongue, bypassing the liver in a more direct path to the bloodstream.
    //     </p>
    //     <div><img src="/image/learnproduct2.jpg" alt="" /></div>
    //     <h2 className="main_title">How Long Do The Effects Of Edibles Last?
    //     </h2>
    //     <p>Remember that everyone reacts differently to edibles, and the higher the amount, the stronger the effects and the longer they will last. The duration of an edible high can range from a few hours to the better part of a day, with THC levels in the bloodstream peaking on average 2 - 3 hours after ingestion.
    //     </p>
    //     <p>Some people indicate that the effects of edibles wear off within 2 - 4 hours, while others report feeling high for up to 12 - 24 hours after intake. Most edible eaters report effects lasting 4 to 8 hours on average.
    //     </p>
    //     <h2 className="main_title">How Much Edible Dosage Should I Take?</h2>
    //     <p>When it comes to cannabis edibles dose, it's always recommended to start low and proceed slowly to minimise any unpleasant side effects from overconsumption.
    //     </p>
    //     <p>Because of the delayed onset time, many rookie edible consumers grow impatient while waiting for the effects to kick in and drink more than they should. This can be a formula for disaster, so always give your body at least an hour or two before doing anything more.
    //     </p>
    //     <p>If you're new to cannabis edibles, this information is extremely crucial because everyone reacts differently to edibles. According to a 2016 Twitter analysis, one of the most frequently cited negative impacts of edibles is their unpredictability.
    //     </p>
    //     <p>A cannabis edibles active cannabinoid, such as THC, is measured in milligrams (mg). THC levels in edibles can range from 0.5 milligrams to hundreds of milligrams. Be cautious: high-dose edibles can be extremely strong and should be approached with caution even by the most experienced cannabis enthusiasts and medical users.
    //     </p>
    //     <div><img src="/image/learnproduct3.jpg" alt="" /></div>
    //     <h2 className="main_title">What Might I Expect From Common Edible Dosages?
    //     </h2>
    //     <p>Many edibles are dosed for the average consumer, with a serving often containing 5 - 10 milligrams of THC (or even less).
    //     </p>
    //     <p>A 5-milligram edible is considered a beginner's dose; however, if you've never tried edibles before, a 2.5-milligram THC dose may be a better starting point. Some users claim to feel effects from THC doses as low as 0.5 milligrams. Lower-dose edibles are likely to cause modest psychoactive effects and are suitable for novices, microdosers, infrequent users, and individuals with a low tolerance for marijuana. For some, a 5 milligram THC edible can induce couch-lock for hours, yet for others with a strong tolerance or fast metabolism, the effects may not last as long or at all.
    //     </p>
    //     <p>A 10 or 15-milligram edible is considered a moderate dose and can elicit significant, euphoric, mind-altering effects as well as decreased perception. Ten-milligram edibles are typically recommended for persons who have previously used edibles and understand how they affect them. A 10 milligram edible will most likely have a faster onset time than a 5 milligram edible, and the effects will normally stay longer.
    //     </p>
    //     <p>Doses in the 25 - 50 milligram range can be rather potent for some, especially those who do not ingest cannabis on a regular basis. In one study of healthy persons who did not regularly ingest cannabis, dosages of 25 milligrams or more were related with increased adverse effects such as nausea and vomiting. Dosages of 100 milligrams or higher of THC are regarded as highly powerful and are more likely to create undesirable side effects. In general, this high-level dose should be reserved for experienced edible users and patients with a strong tolerance or who are treating severe symptoms.
    //     </p>
    //     <p>Starting with a low dose and gradually increasing it is a safe and successful method of dosing with edibles. With a lesser dose, the worst-case scenario is that you don't feel its effects. The worst-case situation with an overdose is an unpleasant loss of mental clarity, paranoia, nausea, and other adverse effects.
    //     </p>
    //     <h2 className="main_title">Bottom Line</h2>
    //     <p>Always remember to start low and go gently when it comes to cannabis edibles. Because the effects of edibles can continue for several hours, allow yourself plenty of time to enjoy the trip. Explore the diversity of food options available, be aware of your consumption, and enjoy the journey.
    //     </p>`
    // </div>
   
    <div className='learnproduct_content'>
      {/* {
        showdata[0].content.map((element,index)=>{
          if(element)
        
        })
      } */}

       <h1 className="main_title">How Long Do The Effects Of Edible Substances Last?</h1>
       <div><img src="/image/learnproduct1.jpg" alt="" /></div>
       <p>It's not surprising that edibles have gained popularity over the past few years because they offer a handy and smokeless way to absorb marijuana. Learn more about the effects of edibles and what influences the strength and length of an edible high in the sections below.</p>
       <h2 className="main_title">What Are Edible Forms Of Cannabis?</h2>
    </div>
  )
}
export default Learnproductcontent