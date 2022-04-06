import React from 'react'

const SSSQ = ({faq,index, toggleFAQ}) => {
  return (
    <div className={`${faq?.open ? "faq-open" : "faq"}`} key={index}
    onClick={() => toggleFAQ(index)}
    >
        <div className='faq-question'>
            {faq.question}
            {faq.open ?
            <span>-</span>
            :
            <span>+</span>
            }
            
        </div>
        <div className='faq-answer'>
            {faq.answer}
        </div>
    </div>
  )
}

export default SSSQ;