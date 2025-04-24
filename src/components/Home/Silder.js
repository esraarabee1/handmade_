import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imghero from "../../images/imghero.png";

const slides = [
  {
    title: "Wear Art, Wear You",
    subtitle: "Discover Unique Handmade Treasures for Your Journey!",
    promotion: "UP to 10% OFF",
    image: imghero,
  },
  {
    title: "Handcrafted Beauty",
    subtitle: "Explore Our Collection of Artisanal Pieces",
    promotion: "Free Shipping",
    image: imghero,
  },
];

function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full overflow-hidden text-white px-4 sm:px-10">
      <div className="container w-full h-[300px] sm:h-[400px] overflow-visible relative px-6 sm:px-10 bg-[#1e2a4a] rounded-xl mx-auto flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6 sm:gap-8 items-center"
          >
            <div className="space-y-4 sm:space-y-6 p-4 sm:p-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-sm sm:text-lg text-gray-300"
              >
                {slides[current].subtitle}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl sm:text-4xl font-bold leading-tight lg:text-6xl"
              >
                {slides[current].title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-3xl font-bold text-yellow-400"
              >
                {slides[current].promotion}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative mx-auto w-3/4 sm:w-full"
            >
              <img
                src={slides[current].image}
                alt="Hero product"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          className="absolute left-2 sm:left-[-40px] top-1/2 transform -translate-y-1/2 bg-white text-blue-600 hover:shadow-lg p-2 sm:p-4 rounded-full"
          onClick={prev}
        >
          <ChevronLeft className="h-6 w-6 sm:h-10 sm:w-10" />
        </button>
        <button
          className="absolute right-2 sm:right-[-40px] top-1/2 transform -translate-y-1/2 bg-white text-blue-600 hover:shadow-lg p-2 sm:p-4 rounded-full"
          onClick={next}
        >
          <ChevronRight className="h-6 w-6 sm:h-10 sm:w-10" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 sm:h-2 sm:w-2 rounded-full transition-all ${
                index === current ? "w-4 sm:w-6 bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
