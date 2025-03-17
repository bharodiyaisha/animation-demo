"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "bizz buzz",
    year: "2023",
    category: "Personal Project",
    image: "/images/banner1.png",
    bgColor: "bg-orange-600",
    textColor: "text-black",
  },
  {
    title: "aquaflow",
    year: "2023",
    category: "Branding and Identity",
    image: "/images/banner2.png",
    bgColor: "bg-white",
    textColor: "text-blue-600",
  },
];

export default function BannerScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={containerRef}
      className="relative h-[200vh] bg-black flex justify-center"
    >
      <div className="sticky top-0 w-full max-w-3xl h-screen">
        {projects.map((project, index) => {
          const y = useTransform(
            scrollYProgress,
            [index * 0.5, (index + 1) * 0.5],
            ["100%", "0%"]
          );
          return <ProjectCard key={index} project={project} y={y} />;
        })}
      </div>
    </div>
  );
}

function ProjectCard({ project, y }) {
  return (
    <motion.div
      style={{ y }}
      className={`absolute w-full rounded-xl overflow-hidden shadow-lg border ${project.bgColor} p-6`}
    >
      <div className={`flex justify-between text-sm ${project.textColor}`}>
        <p>{project.year}</p>
        <p>{project.category}</p>
      </div>
      <h1 className={`mt-4 text-3xl font-bold ${project.textColor}`}>
        {project.title}
      </h1>

      <div
        className="h-[50vh] bg-cover bg-center mt-4 rounded-lg"
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
    </motion.div>
  );
}
