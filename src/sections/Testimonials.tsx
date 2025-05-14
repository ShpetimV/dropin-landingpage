"use client";
import { motion } from "framer-motion";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import {TestimonialCard} from "@/components/TestimonialCard";

const testimonials = [
  {
    text: "DropIn made meeting up with friends effortless. Now we just post a drop-in and see who’s around — no planning stress at all!",
    imageSrc: avatar1.src,
    name: "Lena Meyer",
    username: "@lenameets",
  },
  {
    text: "This app brought my friend group back to life. It’s perfect for spontaneous hangouts and last-minute coffee runs.",
    imageSrc: avatar2.src,
    name: "Chris Daniels",
    username: "@chrisdropsin",
  },
  {
    text: "As a small business owner, being able to create featured events has helped bring in new local customers every week.",
    imageSrc: avatar3.src,
    name: "Tara Nguyen",
    username: "@taracreates",
  },
  {
    text: "I love how lightweight and social DropIn feels. It’s like a casual invite without pressure — exactly what I needed.",
    imageSrc: avatar4.src,
    name: "Daniel Koch",
    username: "@danmeets",
  },
  {
    text: "Premium lets me plan ahead and see who’s interested before the day even starts. Worth it just for that!",
    imageSrc: avatar5.src,
    name: "Aliyah Bennett",
    username: "@aliyahbennett",
  },
  {
    text: "Photo sharing on DropIn is super fun — it feels more intimate than social media and really captures the moment.",
    imageSrc: avatar6.src,
    name: "Jorge Peña",
    username: "@jorgeontherun",
  },
  {
    text: "I joined DropIn just to see who’s around campus — now I’ve made more new friends in a month than all of last year.",
    imageSrc: avatar7.src,
    name: "Emily Stone",
    username: "@emstone",
  },
  {
    text: "The instant chat and event updates make everything feel alive. It’s like your social life has a pulse again.",
    imageSrc: avatar8.src,
    name: "Marcus Kim",
    username: "@markkimdrop",
  },
  {
    text: "Being able to casually schedule events without endless group chats? Game changer.",
    imageSrc: avatar9.src,
    name: "Sophia Becker",
    username: "@sophdropin",
  },
];

export const Testimonials = () => {
  return (
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="text-sm inline-flex items-center gap-2 border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight justify-center">
            Testimonials
          </div>
          <h2 className="section-title mt-5">
            What our users say about us
          </h2>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            {testimonials.map(({ text, imageSrc, name, username }, idx) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              >
                <TestimonialCard text={text} imageSrc={imageSrc} name={name} username={username} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};
