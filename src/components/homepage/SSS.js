import React, {useState} from "react";
import SSSQ from "./SSSQ"

const SSS = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "1-How many programmers does it take to screw in a lightbulb? How many programmers does it take to screw in a lightbulb.",
            answer: "Noen, we dont address hardware issue. Noen, we dont address hardware issue. Noen, we dont address hardware issue.",
            open: false
        },
        {
            question: "2-How many programmers does it take to screw in a lightbulb?",
            answer: "Noen, we dont address hardware issue.",
            open: false
        },
        {
            question: "3-How many programmers does it take to screw in a lightbulb?",
            answer: "Noen, we dont address hardware issue.",
            open: false
        },
        {
            question: "4-How many programmers does it take to screw in a lightbulb?",
            answer: "Noen, we dont address hardware issue.",
            open: false
        },
        {
            question: "5-How many programmers does it take to screw in a lightbulb?",
            answer: "Noen, we dont address hardware issue.",
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open;
            } else{
                faq.open = false;
            }

            return faq;
        }))
    }
    return(
        <div className='height-100vh flex-column-center'>
            <span className='width-50 fs-400 fw-bold ta-center mb-3'>Sık Sorulan Sorular</span>
            <div className="faqs">
                {faqs.map((faq,i) => {
                     return <SSSQ key={i} faq={faq} index={i} toggleFAQ={toggleFAQ}/> 
                })}
            </div>
        </div>
    )
}

export default SSS;
