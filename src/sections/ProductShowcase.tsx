"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import IphoneScreenShotRender from "@/assets/IphoneScreenshotMarker.png"
import IphoneScreenShotRenderHome from "@/assets/DropIn-Screenshot.png"
import Star from "@/assets/star.png"
import iphoneRender from "@/assets/3drenderIphone.png";
import cylinder from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Spring from "@/assets/spring.png"

export const ProductShowcase = () => {


  return (
    <section id="features" className="py-24 bg-[radial-gradient(ellipse_160%_120%_at_bottom_right,#183EC2,#EAEEFE_70%)]">
      <div className="container space-y-32">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative md:w-1/2 mt-8 md:mt-0">
            <Image
              src={IphoneScreenShotRenderHome}
              alt="DropIn Home View"
              width={250}
              className=""
            />
            <Image
                src={Spring}
                width={220}
                alt="Star Image"
                className="hidden lg:block absolute top-80 -right-12 rotate-[40deg] animate-[float_5s_ease-in-out_infinite]"
            />
          </div>
          <div className="">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="section-title mt-6"
            >
              Your Plans, At a Glance
            </motion.h2>
            <p className="text-lg text-gray-700">
              Explore the featured events hand-picked for you. Instantly see what’s happening today, and just tap to DropIn.
            </p>
          </div>
        </div>
        {/* Section 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="section-title mt-6"
            >
              Find the Vibe, Join the Fun
            </motion.h2>
            <p className="text-lg text-gray-700">
              Zoom in on the map to see where all the action is happening. Track hangouts near you and drop in before they’re full.
            </p>
          </div>
          <div className="relative md:w-1/2 mt-8 md:mt-0">
            <Image
              src={IphoneScreenShotRender}
              alt="Event Map View"
              width={250}
              className=""
            />
            <Image
              src={Star}
              width={220}
              alt="Star Image"
              className="hidden lg:block absolute -top-16 -right-8 rotate-[5deg] animate-[float_4s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
