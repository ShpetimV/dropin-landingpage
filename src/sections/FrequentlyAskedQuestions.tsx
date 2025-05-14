"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import QuestionMark from "@/assets/questionmark.png";
import Image from "next/image";
import Pyramid from "@/assets/pyramid.png";



const faqs = [
  {
    question: "What is DropIn and how does it work?",
    answer: "DropIn is a social app that helps users create and join casual meetups. Just post a drop-in and friends nearby can join instantly.",
  },
  {
    question: "Is DropIn free to use?",
    answer: "Yes! Most features are free. We also offer premium and business plans with extra features like advanced scheduling and more visibility.",
  },
  {
    question: "Can I use DropIn to host events for my business?",
    answer: "Absolutely. Business users can create featured events, advertise them, and even schedule events up to a week in advance.",
  },
];

export const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="relative z-10">
        <div className="absolute top-36 right-[470px] z-[-1]">
          <Image
              src={QuestionMark}
              alt="Question Mark"
              width={360}
              height={360}
              className="opacity-90 rotate-[25deg]"
          />
        </div>
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="section-title mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="pricing-card overflow-hidden">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-6 py-4 focus:outline-none font-medium text-gray-800"
                >
                  <h2 className="text-lg font-bold">{faq.question}</h2>
                  <IoIosArrowDown />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-40 py-4" : "max-h-0 py-0"
                  }`}
                >
                  <p className="text-black">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
