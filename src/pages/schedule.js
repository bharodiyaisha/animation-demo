import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { scheduleData } from "@/constant";

const Schedule = () => {
  const scrollRef = useRef(null);

  const [pageHeight, setPageHeight] = useState(0);

  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );
    scrollRef && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);

  const spring = useSpring(transform, {
    damping: 25,
    mass: 0.27,
    stiffness: 150,
  });

  return (
    <div className="min-h-screen bg-indigo-500 flex items-center justify-center p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="col-span-1 text-white">
          <h2 className="text-3xl font-bold">SCHEDULE</h2>
          <div className="mt-6 space-y-2">
            <p className="text-gray-400">DAY 01</p>
            <p className="text-white font-semibold">DAY 02</p>
          </div>
        </div>

        <motion.div
          ref={scrollRef}
          style={{ y: spring }}
          className="col-span-1 sm:col-span-1 md:col-span-2 space-y-6 max-h-[calc(100vh-50px)] overflow-y-auto no-scrollbar scroll-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {scheduleData.map((event, index) => (
            <div key={index} className="bg-indigo-400 p-6 rounded-lg shadow-lg">
              <p className="text-sm text-gray-300 font-mono bg-indigo-600 px-2 py-1 rounded-lg inline-block">
                {event.time}
              </p>
              <h3 className="text-lg font-bold text-white mt-2">
                {event.title}
              </h3>
              <p className="text-gray-200 mt-2">{event.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <div style={{ height: pageHeight }} />
    </div>
  );
};

export default Schedule;
