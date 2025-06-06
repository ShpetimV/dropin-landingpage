import logo from "@/assets/dropin-logo.png"
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";


export const Footer = () => {
  return (
      <footer className="bg-[#010D3E] text-[#BCBCBC] text-sm py-10 text-center">
        <div className="container">
            <div className="inline-flex relative before:content-[''] before:h-full before:w-full before:absolute">
                <Image src={logo} height={40} alt="Logo"/>
            </div>
            <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Customers</a>
                <a href="#">FAQ</a>
            </nav>
            <div className="flex justify-center gap-6 mt-6">
                <SocialX/>
                <SocialInsta/>
                <SocialLinkedIn/>
                <SocialYoutube/>
            </div>
            <p className="mt-6">&copy; 2025 DropIn Team, Inc. All rights reserved.</p>
        </div>
      </footer>
  );
};
