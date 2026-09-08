import { ArrowBigDown, ArrowDown, Plus } from "lucide-react";
import React, { useState } from "react";

export default function CommonQuestions() {
  const [openIndex, setOpenIndex] = useState(false);
  const handleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "How can I add my car to CarCare?",
      answer:
        "You can easily add your vehicle by entering its basic information.",
    },
    {
      question: "How can I track my car maintenance?",
      answer: "CarCare helps you keep track of all your maintenance records.",
    },
    {
      question: "Can I add multiple vehicles?",
      answer: "Yes, you can add and manage multiple vehicles in your account.",
    },
    {
      question: "Can I set maintenance reminders?",
      answer:
        "Yes, you can create reminders for your upcoming car maintenance.",
    },
    {
      question: "Is my car information safe?",
      answer:
        "Yes, your vehicle information is securely stored in your account.",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 mb-[100px]">
      <div className="flex flex-col justify-center items-center mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          Frequently asked question
        </h2>
        <p className="mb-3 text-center text-slate-500">
          Everything you need to know about CarCare.
        </p>
        <div className="flex flex-col justify-center max-w-3xl space-y-4">
          {questions?.map((item, index) => (
            <div
              key={index}
              className="w-[450px] bg-gray-100 rounded-xl shadow-sm"
            >
              <button
                onClick={()=>handleIndex(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-blue-950  cursor-pointer"
              >
                {item.question}
                <ArrowDown
                  size={16}
                  className={`transition-transform duration-700 ${openIndex === index ? "rotate-180" : ""} text-blue-700`}
                />
              </button>
              {openIndex === index && (
                <p className="bg-blue-100 px-6 py-4 text-sm text-blue-700 rounded-b-xl faqOpen">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
