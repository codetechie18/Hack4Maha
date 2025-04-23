import React, { useState } from 'react'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is Hack4Maha?",
      answer: "Hack4Maha is a 24-hour hackathon where participants come together to solve real-world problems through technology and innovation."
    },
    {
      question: "Who can participate?",
      answer: "Anyone with a passion for technology and problem-solving can participate. Whether you're a student, professional, or enthusiast, you're welcome to join!"
    },
    {
      question: "Do I need to know how to code?",
      answer: "While coding knowledge is helpful, we welcome participants with diverse skills including design, business, and project management."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in Hack4Maha is completely free of charge."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, and any other devices you'll need. We'll provide food, drinks, and a comfortable workspace."
    }
  ]

  return (
    <div className="bg-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 font-pixelf">
          Frequently Asked Questions
        </h2>
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="py-6 w-full flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <span className="ml-6">
                  <svg
                    className={`w-6 h-6 transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-gray-500">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
