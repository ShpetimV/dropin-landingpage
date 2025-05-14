"use client";
import { IoMdHome } from "react-icons/io";
import { MdAttachMoney, MdOutlineQuestionAnswer } from "react-icons/md";
import MenuIcon from "@/assets/menu.svg"
import { HiOutlineSparkles } from "react-icons/hi2";
import { IoPeopleSharp } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image"

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
      <header className="sticky top-0 z-50">
      <div className="container">
    <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2 rounded-3xl bg-white/20 px-6 py-3 shadow-xl backdrop-blur-lg border border-white/40 transition-all duration-300">
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
        <MenuIcon className="h-5 w-5" />
      </button>
      <div className={`absolute top-full left-1/2 -translate-x-1/2 w-72 overflow-hidden transition-all duration-300 ease-in-out rounded-2xl md:hidden ${
        menuOpen ? "max-h-96 mt-4" : "max-h-0"
      }`}>
        <div className="bg-white/90 backdrop-blur-md border border-white/40 shadow-lg px-6 py-4 text-[#1A2B3C]">
          <a href="#home" className="block py-2 px-4 rounded-md hover:bg-[#00B4D8]/10">Home</a>
          <a href="#features" className="block py-2 px-4 rounded-md hover:bg-[#00B4D8]/10">Features</a>
          <a href="#pricing" className="block py-2 px-4 rounded-md hover:bg-[#00B4D8]/10">Pricing</a>
          <a href="#testimonials" className="block py-2 px-4 rounded-md hover:bg-[#00B4D8]/10">Testimonials</a>
          <a href="#faq" className="block py-2 px-4 rounded-md hover:bg-[#00B4D8]/10">FAQ</a>
        </div>
      </div>
      <nav className="flex items-center gap-4 text-sm font-medium text-[#1A2B3C] hidden md:flex">
        <a href="#home" className="flex items-center gap-2 bg-[#00B4D8]/20 text-[#1A2B3C] px-4 py-2 rounded-full shadow-md">
          <IoMdHome />
          Home
        </a>
        <a href="#features" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#00B4D8]/20 hover:text-[#00B4D8] transition-colors duration-200">
          <HiOutlineSparkles/>
          Features
        </a>
        <a href="#pricing" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#00B4D8]/20 hover:text-[#00B4D8] transition-colors duration-200">
          <MdAttachMoney />
          Pricing
        </a>
        <a href="#pricing" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#00B4D8]/20 hover:text-[#00B4D8] transition-colors duration-200">
          <IoPeopleSharp />
          Testimonials
        </a>
        <a href="#faq" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#00B4D8]/20 hover:text-[#00B4D8] transition-colors duration-200">
          <MdOutlineQuestionAnswer />
          FAQ
        </a>
      </nav>
    </div>
      </div>
      </header>
  );
};
