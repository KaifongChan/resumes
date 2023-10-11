// Parent Component

import { useState } from "react";

export default function ResumeGenerator() {

    const [userDetails, setUserDetails] = useState({ firstName: "", lastName: "", university: "", company: "" })
    const [submitted, setSubmitted] = useState(false);

    const firstNameChange = (evt) => {
        setUserDetails({ ...userDetails, firstName: evt.target.value })
    }

    const lastNameChange = (evt) => {
        setUserDetails({ ...userDetails, lastName: evt.target.value })
    }

    const universityChange = (evt) => {
        setUserDetails({ ...userDetails, university: evt.target.value })
    }

    const companyChange = (evt) => {
        setUserDetails({ ...userDetails, company: evt.target.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSubmitted(!submitted);
        // setUserDetails({
        //     ...userDetails, firstName: "", lastName: "", university: "", company: ""
        // })
        document.querySelector('form').reset();
    }

    return (
        <div id="wrapper" className="bg-green-600 h-screen flex flex-row ">
            <div className="basis-1/4 grow bg-black text-white flex flex-col">
                <ResumeQuery userObject={userDetails} firstName={firstNameChange} lastName={lastNameChange} university={universityChange} company={companyChange} submitted={submitted} handleSubmit={handleSubmit} />
            </div>
            <div className="basis-3/4 grow bg-white flex flex-col items-center justify-center">
                {submitted ? <ResumePreview userDetails={userDetails} submitted={submitted} /> : <DefaultPreview />}

            </div>
        </div>
    )
}

function ResumeQuery({ userObject, firstName, lastName, university, company, submitted, handleSubmit }) {
    return (
        <form className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" onChange={firstName} required className="text-black" />

            <label htmlFor="lastName">Surname</label>
            <input type="text" id="lastName" name="lastName" onChange={lastName}  required className="text-black" />

            <label htmlFor="university">University</label>
            <input type="text" id="university" name="university" onChange={university} required className="text-black" />

            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" onChange={company} required className="text-black" />
            <div className="flex flex-row justify-around">
                <button className="border-zinc-700" onClick={handleSubmit}>Submit</button>
                {submitted ? <button onClick={handleSubmit}>Reset</button> : <button disabled className="disabled: line-through" onClick={handleSubmit}>Reset</button>}
                
                
                {/* <button onClick={handleSubmit}>Reset</button> */}
            </div>
        </form>
    )
}

function ResumePreview({ userDetails, submitted }) {
    let fullName = `${userDetails.firstName} ${userDetails.lastName}`
    return (
        <>
            <h1 className="text-4xl mb-5">A resume for {fullName}.</h1>
            <h2>{fullName} graduated from {userDetails.university}.</h2>
        </>
    )
}

function DefaultPreview() {
    return (
        <>
            <h1 className="animate-pulse">This is where your information will go.</h1>
            <h2 className="animate-pulse">Fill in the form and submit to see your new resume!</h2>
        </>
    )
}