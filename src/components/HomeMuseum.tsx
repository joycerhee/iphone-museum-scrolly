'use client';

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

const eras = [
  {
    year: "2007",
    title: "iPhone",
    focus: "First multi-touch smartphone",
    proof: "6.1 million units sold in year one",
    why: "This launch proved the phone could be a platform for creativity and style.",
    image: "iphone-2007.webp",
  },
  {
    year: "2008",
    title: "iPhone 3G",
    focus: "App Store launches, 3G speed",
    proof: "500 apps on day one, now nearly 2 million",
    why: "The App Store made the iPhone a hub for third-party innovation.",
    image: "iphone-3g.jpg",
  },
  {
    year: "2009",
    title: "iPhone 3GS",
    focus: "Video recording, faster processor",
    proof: "First iPhone to sell 1M units in one weekend",
    why: "Performance and media features moved the iPhone from gadget to essential tool.",
    image: "iphone-3gs.jpg",
  },
  {
    year: "2010",
    title: "iPhone 4",
    focus: "Retina display, FaceTime, Apple A4 chip",
    proof: "Instagram launches same year",
    why: "Design and screen quality defined the modern smartphone era.",
    image: "iphone-4.jpg",
  },
  {
    year: "2011",
    title: "iPhone 4s",
    focus: "Siri AI assistant, 8MP camera",
    proof: "First AI assistant on any phone",
    why: "Voice and AI began to feel natural on a handheld device.",
    image: "iphone-4s.jpg",
  },
  {
    year: "2012",
    title: "iPhone 5",
    focus: "4G LTE, Lightning connector, 4-inch screen",
    proof: "Fastest-selling Apple product at launch",
    why: "Faster networks and a taller display made everyday use smoother.",
    image: "iphone-5.jpg",
  },
  {
    year: "2013",
    title: "iPhone 5s",
    focus: "Touch ID, first 64-bit mobile chip (A7)",
    proof: "Years ahead of any competitor",
    why: "Security and performance set a new standard for the industry.",
    image: "iphone-5s.webp",
  },
  {
    year: "2014",
    title: "iPhone 6",
    focus: "Larger 4.7\" screen, Apple Pay",
    proof: "Mobile payments go mainstream",
    why: "A bigger canvas and contactless payments made the iPhone more useful every day.",
    image: "iphone-6.jpg",
  },
  {
    year: "2015",
    title: "iPhone 6s",
    focus: "3D Touch, 12MP camera, 4K video",
    proof: "4K video in your pocket",
    why: "New input and capture tools made the phone more expressive.",
    image: "iphone-6s.webp",
  },
  {
    year: "2016",
    title: "iPhone 7",
    focus: "Water resistance, no headphone jack, stereo speakers",
    proof: "AirPods launch — wireless audio becomes standard",
    why: "Durability and wireless audio shifted expectations for mobile hardware.",
    image: "iphone-7.jpg",
  },
  {
    year: "2017",
    title: "iPhone X",
    focus: "Face ID, OLED, Neural Engine, no home button",
    proof: "First AI hardware in a consumer phone",
    why: "This redesign made the interface feel intelligent and immersive.",
    image: "iphone-x.jpg",
  },
  {
    year: "2018",
    title: "iPhone XS / XR",
    focus: "Smart HDR, stronger Neural Engine",
    proof: "Computational photography era begins",
    why: "Photography became smarter, letting the phone see and adapt.",
    image: "iphone-xs.jpg",
  },
  {
    year: "2019",
    title: "iPhone 11",
    focus: "Triple camera, Ultra Wide, Night Mode",
    proof: "Smartphones surpass compact cameras",
    why: "Apple made pro-caliber photo tools accessible to everyone.",
    image: "iphone-11.jpg",
  },
  {
    year: "2020",
    title: "iPhone 12",
    focus: "5G, MagSafe, OLED for all, flat-edge design",
    proof: "5G reaches consumers at scale",
    why: "The phone became faster, more connected, and more premium in hand.",
    image: "iphone-12.jpg",
  },
  {
    year: "2021",
    title: "iPhone 13 Pro",
    focus: "ProMotion 120Hz, Cinematic Mode",
    proof: "Hollywood-quality video in your hand",
    why: "High-frame-rate displays and video tools made storytelling easier.",
    image: "iphone-13-pro.jpg",
  },
  {
    year: "2022",
    title: "iPhone 14 Pro",
    focus: "48MP camera, Dynamic Island, satellite SOS",
    proof: "Life-saving tech beyond cell coverage",
    why: "The iPhone started to feel like a personal safety device as much as a camera.",
    image: "iphone-14-pro.jpg",
  },
  {
    year: "2023",
    title: "iPhone 15",
    focus: "USB-C replaces Lightning, titanium Pro",
    proof: "Apple joins global charging standard",
    why: "The iPhone aligned with a global ecosystem in hardware and ports.",
    image: "iphone-15.jpg",
  },
  {
    year: "2024",
    title: "iPhone 16",
    focus: "Apple Intelligence AI, Camera Control, Wi-Fi 7",
    proof: "On-device AI reaches 3 billion pockets",
    why: "AI began to feel built into the experience, not bolted on.",
    image: "iphone-16.jpg",
  },
  {
    year: "2025",
    title: "iPhone 17 / Air",
    focus: "Ultra-thin design, enhanced Apple Intelligence",
    proof: "Thinnest iPhone ever made",
    why: "Design and intelligence combined to make the phone feel lighter and smarter.",
    image: "iphone-17.jpg",
  },
];

const transitionText: Record<number, string> = {
  2: "The foundation was set. Now Apple would redefine what a phone looks like.",
  6: "Touch ID and 64-bit computing signaled Apple's move from phone maker to chip pioneer.",
  10: "With Face ID and the Neural Engine, the iPhone became an AI device.",
  14: "The camera had become the iPhone's most important feature. Now Apple turned to the world beyond cellular.",
};

export function HomeMuseum() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0.04, 1]);
  const imageParallax = useTransform(scrollYProgress, [0, 1], [0, -28]);
  const counter = useMotionValue(0);
  const [heroCount, setHeroCount] = useState("0");

  useEffect(() => {
    if (shouldReduceMotion) {
      setHeroCount("3,000,000,000");
      return;
    }

    const controls = animate(counter, 3000000000, {
      duration: 2.4,
      ease: "easeOut",
      onUpdate(value) {
        setHeroCount(Math.round(value).toLocaleString());
      },
    });

    return controls.stop;
  }, [counter, shouldReduceMotion]);

  return (
    <main className="relative min-h-screen bg-white text-slate-950">
      <div className="fixed inset-x-0 top-0 z-50 h-1 overflow-hidden bg-slate-200">
        <motion.div className="h-full origin-left bg-slate-950" style={{ scaleX: progressScale }} />
      </div>

      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-20 sm:px-8 sm:py-28">
        <motion.section
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.98 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="mb-16 rounded-3xl border border-slate-200 bg-slate-50/90 p-10 shadow-sm"
        >
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-sm uppercase tracking-[0.3em] text-slate-500"
          >
            The iPhone Evolution Museum
          </motion.p>
          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: "easeOut" }}
            className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl"
          >
            Over <span className="text-slate-950">{heroCount}</span> iPhones sold worldwide
          </motion.h1>
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-3xl text-lg leading-8 text-slate-700"
          >
            Walk through every major iPhone release from 2007 through 2025. Each milestone reveals how Apple redefined mobile creativity, culture, and the future of personal computing.
          </motion.p>
        </motion.section>

        <div className="space-y-14">
          {eras.map((era, index) => {
            const isEven = index % 2 === 1;
            const animationPattern = index % 4;
            const textAnimation = shouldReduceMotion
              ? { initial: {}, whileInView: {} }
              : animationPattern === 0
              ? { initial: { opacity: 0, x: -32 }, whileInView: { opacity: 1, x: 0 } }
              : animationPattern === 1
              ? { initial: { opacity: 0, x: 32 }, whileInView: { opacity: 1, x: 0 } }
              : animationPattern === 2
              ? { initial: { opacity: 0, scale: 0.94 }, whileInView: { opacity: 1, scale: 1 } }
              : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 } };

            return (
              <div key={era.year}>
                <motion.section
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="rounded-[2rem] border border-slate-200 bg-slate-50/90 p-10 shadow-sm"
                >
                  <div className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 ${isEven ? "md:grid-flow-col-dense" : ""}`}>
                    <motion.img
                      src={`/iphone-museum-scrolly/images/iphones/${era.image}`}
                      alt={`iPhone ${era.title}`}
                      className={`rounded-2xl max-h-[280px] object-contain ${isEven ? "md:order-2" : ""}`}
                      style={{ y: shouldReduceMotion ? 0 : imageParallax }}
                      initial={shouldReduceMotion ? {} : { opacity: 0, x: isEven ? 40 : -40, rotate: isEven ? 5 : -5 }}
                      whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0, rotate: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <motion.div
                      initial={textAnimation.initial}
                      whileInView={textAnimation.whileInView}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                      className={isEven ? "md:order-1" : ""}
                    >
                      <motion.p
                        initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-7xl font-black tracking-tight text-slate-900 sm:text-8xl"
                      >
                        {era.year}
                      </motion.p>
                      <div className="mt-6 flex flex-col gap-6">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                          <motion.h2
                            initial={shouldReduceMotion ? {} : { opacity: 0, y: 18 }}
                            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
                          >
                            {era.title}
                          </motion.h2>
                          <div>
                            <motion.div
                              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96 }}
                              whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
                              viewport={{ once: true, amount: 0.35 }}
                              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                            >
                              {era.proof}
                            </motion.div>
                            <motion.p
                              initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
                              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.35 }}
                              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
                              className="mt-3 max-w-2xl text-sm italic leading-6 text-slate-600"
                            >
                              {era.why}
                            </motion.p>
                          </div>
                        </div>

                        <p className="max-w-3xl text-lg leading-8 text-slate-700">{era.focus}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.section>

                {index < eras.length - 1 ? (
                  <motion.div
                    initial={shouldReduceMotion ? {} : { opacity: 0, scaleX: 0.6 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, scaleX: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mx-auto h-px w-full max-w-4xl bg-slate-200"
                  />
                ) : null}

                {transitionText[index] ? (
                  <motion.div
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mx-auto max-w-3xl text-center text-sm italic text-slate-600"
                  >
                    {transitionText[index]}
                  </motion.div>
                ) : null}
              </div>
            );
          })}
        </div>

        <motion.section
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-20 rounded-3xl border border-slate-200 bg-slate-50/90 p-10 text-slate-900 shadow-sm"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Legacy</p>
          <blockquote className="mt-6 border-l-4 border-slate-300 pl-6 text-xl leading-9 text-slate-900">
            “Innovation distinguishes between a leader and a follower.”
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-slate-500">— Steve Jobs</p>
        </motion.section>

        <footer className="mt-20 border-t border-slate-200 pt-8 text-sm text-slate-500">
          iPhone Evolution Museum © 2026
        </footer>
      </div>
    </main>
  );
}
