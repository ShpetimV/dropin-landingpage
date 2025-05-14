"use client"
import acmeLogo from "@/assets/logo-acme.png"
import quantumLogo from "@/assets/logo-quantum.png"
import echoLogo from "@/assets/logo-echo.png"
import celestialLogo from "@/assets/logo-celestial.png"
import pulseLogo from "@/assets/logo-pulse.png"
import apexLogo from "@/assets/logo-apex.png"
import Image from "next/image"
import { motion } from "framer-motion"

export const LogoTicker = () => {
    return (
        <div className="py-8 bg-white">
            <div className="container">
                <div
                    className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <motion.div
                      className="flex gap-14 flex-none"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    >
                        <Image src={acmeLogo} alt="Acme Logo" className="logo-tikcer-image"/>
                        <Image src={quantumLogo} alt="Quantum Logo" className="logo-tikcer-image"/>
                        <Image src={echoLogo} alt="Echo Logo" className="logo-tikcer-image"/>
                        <Image src={celestialLogo} alt="Celestial Logo" className="logo-tikcer-image"/>
                        <Image src={pulseLogo} alt="Pulse Logo" className="logo-tikcer-image"/>
                        <Image src={apexLogo} alt="Apex Logo" className="logo-tikcer-image"/>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
