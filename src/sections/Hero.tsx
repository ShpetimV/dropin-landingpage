"use client"
import {FaApple} from "react-icons/fa";
import ArrowIcon from "@/assets/arrow-right.svg";
import Image from "next/image";
import cylinder from "@/assets/cylinder.png"
import noodleImage from "@/assets/noodle.png"
import iphoneRender from "@/assets/3drenderIphone.png"
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section id="home" className="pt-32 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_70%)]">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                    <div className="md:flex-1">
                      <motion.h1
                        className="section-title text-7xl mb-5"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                      >
                        DropIn
                      </motion.h1>

                      <motion.div
                        className="text-sm inline-flex items-center gap-2 border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight justify-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        <FaApple /> Now on the App Store
                      </motion.div>

                      <motion.h1
                        className="section-title mt-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        Your Social Life, Just a Tap Away.
                      </motion.h1>

                      <motion.p
                        className="text-xl text-[#010D3E] tracking-tight mt-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      >
                        Spontaneous plans just got an upgrade — create or join hangouts happening within 24 hours, chat with your crew before, and drop pics after. It’s all on the map, just waiting for you to DropIn.
                      </motion.p>

                      <motion.div
                        className="flex items-center gap-5 mt-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.6 }}
                      >
                        <button className="btn">Get for free</button>
                        <button className="btn justify-center items-center inline-flex">
                          Learn more <ArrowIcon className="w-5 h-5" />
                        </button>
                      </motion.div>
                    </div>
                    <div className="mt-16 md:mt-0 md:h-[648px] md:flex-1 relative">
                        <motion.img
                          src={iphoneRender.src}
                          alt="Pyramide"
                          initial={{ opacity: 0, y: 20, rotate: 12 }}
                          animate={{ opacity: 1, y: 0, rotate: 12}}
                          transition={{ delay: 0.2, duration: 0.6 }}
                          className="md:absolute md:h-full md:w-auto md:max-w-none md:left-6 rotate-[12deg] left-[180px]"
                        />
                        <motion.img
                            src={cylinder.src}
                            width={220}
                            height={220}
                            alt="cylinder Image"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="hidden md:block -top-8 -left-22 md:absolute"
                        />
                        <motion.img src={noodleImage.src}
                                    width={220}
                                    alt="noodle Image"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                    className="hidden lg:block absolute top-[514px] left-[428px] rotate-[30deg]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
