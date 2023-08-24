import React from "react"

const FrequentlyAskedQuestion = () => {
    const FrequentlyAskedQuestion = [
        {
            head: "1. Can I use medical marijuana for any medical condition?",
            paragraph: "No, the Compassion Act specifies a list of qualifying conditions, including chronic pain, cancer, epilepsy, and more. Consultation with a qualified medical professional is essential to determine eligibility."
        },
        {
            head: "2. Can I apply for a medical marijuana card if I'm not an Alabama resident?",
            paragraph: "No, the Compassion Act restricts medical marijuana cards to Alabama residents only."
        },
        {
            head: "3. Can I grow my own medical marijuana plants as a patient?",
            paragraph: "No, home cultivation of marijuana is not permitted for medical or recreational use in Alabama."
        },
        {
            head:"4. What penalties can I face for possessing marijuana illegally?",
            paragraph:"A: Possession of marijuana for recreational use is illegal and can lead to legal consequences, including fines and potential incarceration."
        },
        {
            head:"Can the Compassion Act change in the future?",
            paragraph:"Yes, like any legislation, the Compassion Act can be amended or modified by future legislative actions."
        }
    ]
    return (
        <>
        <h2 className="isweedLegalHeading">Frequently asked questions</h2>
            <div className="col-12 CannabisSafeStatePurchase_Col">
                {FrequentlyAskedQuestion.map((val, index) => {
                    return (
                        <React.Fragment key={index}>
                            <h2 id="LegislationHistory" className="frequentlySubHeading">{val.head}</h2>
                            <p className="isWeedLegalParagraph">
                               {val.paragraph}
                            </p>
                        </React.Fragment>
                    )
                })}

            </div>
        </>
    )
}
export default FrequentlyAskedQuestion